import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/blog/container'
import DateFormatter from '../../components/blog/dateformatter'
import PostBody from '../../components/blog/postbody'
import PostHeader from '../../components/blog/postheader'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { AuthorType, getAllPosts, getPostBySlug, PostType } from '../../lib/blogapi'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }: { post: PostType, morePosts: PostType[], preview: any }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className="overflow-x-hidden">
      <Header pageName={post.title} />
      <Navbar />
      <Container>
        {router.isFallback ? (
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Loading...
          </h1>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }: { params: any }) {
  const post = getPostBySlug<PostType>(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

const Avatar = ({ name, picture }: { name: string, picture: string }) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

const PostHeader = ({ title, slug, coverImage, date, author }: { title: string, slug: string, coverImage: string, date: string, author: AuthorType }) => {
  return (
    <>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <div className="bg-cover bg-center h-[80vh] w-screen" style={{ backgroundImage: `url("${coverImage}")` }}></div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BackgroundImage from '../../components/BackgroundImage'
import Container from '../../components/Container'
import DateFormatter from '../../components/DateFormatter'
import FeaturedPostList from '../../components/FeaturedPostList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { getAllPosts, getPostBySlug, PostType } from '../../lib/blogapi'
import markdownToHtml from '../../lib/markdownToHtml'
import markdownStyles from '../../styles/markdown-styles.module.css'

export default function Post({ post, morePosts }: { post: PostType, morePosts: PostType[] }) {

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="overflow-x-hidden">
      <Header
        pageName={post.title}
        pageDesc="DumbCode Blog Post; Read More Here!"
        ogImage={{ "path": post.ogImage.url, width: 1280, height: 640 }}
        article={{ "title": post.title, "publisher": post.author.name, "category": "Gaming", "tags": ["gaming", "minecraft", "modding", "modeling", "animation", "texturing", "gamedev"], "publishedTime": post.date}}
      />
      <Navbar />
      {router.isFallback ? (
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          Loading...
        </h1>
      ) : (
        <div className="bg-neutral-800">
          <div className="bg-cover bg-center h-[80vh] w-screen">
            <BackgroundImage alt="coverImage" src={post.coverImage} />
          </div>
          <article className="">
            <div className="max-w-4xl px-4 md:px-20 pb-10 mx-auto bg-neutral-200 -translate-y-20 rounded-lg">
              <h1 className="text-neutral-900 text-6xl md:text-7xl pt-6 lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
                {post.title}
              </h1>
              <Avatar name={post.author.name} picture={post.author.picture} />
              <DateFormatter dateString={post.date} />
              <div className="w-full bg-neutral-800 h-0.5 my-10"></div>
              <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
          {morePosts && <ReccomendedPosts posts={morePosts} />}
        </div>
      )}
      <Footer />
    </div>
  )
}

const ReccomendedPosts = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="bg-neutral-900 bg-opacity-60 pt-10">
      <Container>
        <div className="text-center lg:text-left my-10 w-full text-white">
          <h1 className="text-6xl font-semibold">Read More</h1>
          <p className="font-semibold text-md text-neutral-500 ml-1">See what else DumbCode has to read about.</p>
        </div>
        <FeaturedPostList posts={posts} />
      </Container>
    </div>
  );
}

const Avatar = ({ name, picture }: { name: string, picture: string }) => {
  return (
    <div className="flex items-center">
      <Image src={picture} width={48} height={48} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold pl-2">{name}</div>
    </div>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: [
        ...allPosts
      ]
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
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/blog/container'
import PostBody from '../../components/blog/postbody'
import PostHeader from '../../components/blog/postheader'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { getAllPosts, getPostBySlug, PostType } from '../../lib/blogapi'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }: {post: PostType, morePosts: PostType[], preview: any}) {
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

export async function getStaticProps({ params }: {params:any}) {
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

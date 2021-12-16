import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackgroundImage from '../../components/BackgroundImage'
import Container from '../../components/Container'
import DateFormatter from '../../components/DateFormatter'
import FeaturedPostList from '../../components/FeaturedPostList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { getAllPosts, PostType } from '../../lib/blogapi'

export default function Index({ allPosts }: { allPosts: PostType[] }) {

  const latestPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <div className="overflow-x-hidden bg-neutral-800 relative">
      <Header pageName="Blog" />
      <Navbar />
      <div className="text-center lg:text-left md:ml-40 m-10 py-4 px-20 text-white absolute bg-blue-500 bg-opacity-80 rounded-md z-10">
        <h1 className="text-6xl font-semibold">Latest Post</h1>
        <p className="font-semibold text-md text-neutral-300 ml-1">What&apos;s new with DumbCode.</p>
      </div>
      {latestPost && <HeroPost post={latestPost} />}
      <section className="w-screen bg-neutral-900 bg-opacity-60 pt-10 overflow-hidden">
        <Container>
          <div className="text-center lg:text-left my-10 w-full text-white">
            <h1 className="text-6xl font-semibold">Other Posts</h1>
            <p className="font-semibold text-md text-neutral-500 ml-1">See Updates on what we&apos;ve got cooking.</p>
          </div>
          <FeaturedPostList posts={morePosts} />
        </Container>
      </section>
      <Footer />
    </div>
  )
}

const HeroPost = ({ post }: { post: PostType }) => {

  const router = useRouter();
  const goToPost = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/blog/${post.slug}`);
  }

  return (
    <section>
      <div className="mb-8 md:mb-4">
        <CoverImage
          title={post.title}
          src={post.coverImage}
          slug={post.slug}
        />
      </div>
      <Container>
        <div className="text-white md:grid grid-flow-row grid-cols-2">
          <div className="bg-neutral-900 p-4 pl-10 rounded-md -translate-y-20">
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-bold">
              {post.title}
            </h3>
            <div className="w-full">
              <button className="bg-blue-500 text-white py-2 px-10 rounded-md absolute right-0 mr-10" onClick={goToPost}>Read More</button>
            </div>
          </div>
          <div className="bg-neutral-700 p-4 rounded-md m-4">
            <div className="mb-2">
              <Avatar name={post.author.name} picture={post.author.picture} />
              <DateFormatter dateString={post.date} />
            </div>
            <p className="text-xs leading-relaxed mb-4 columns-2">{post.excerpt}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

const Avatar = ({ name, picture }: { name: string, picture: string }) => {
  return (
    <div className="flex items-center">
      <Image src={picture} width={48} height={48} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="pl-2 text-xl font-bold">{name}</div>
    </div>
  )
}

const CoverImage = ({ title, src, slug }: { title: string, src: string, slug: string | undefined }) => {

  const image = (
    <div className="bg-cover bg-center h-[80vh] w-screen">
      <BackgroundImage alt={title} src={src} />
    </div>
  )

  return (
    <div className="sm:mx-0">
      {slug ? <Link as={`/blog/${slug}`} href="/blog/[slug]"><a aria-label={title}>{image}</a></Link> : image}
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

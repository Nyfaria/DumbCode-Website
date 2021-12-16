import Container from '../../components/blog/container'
import HeroPost from '../../components/blog/heropost'
import MoreStories from '../../components/blog/morestories'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { getAllPosts } from '../../lib/blogapi'

export default function Index({ allPosts }) {

  const latestPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <div className="overflow-x-hidden bg-neutral-800">
      <Header pageName="Blog" />
      <Navbar />
      <div className="text-center lg:text-left ml-40 m-10 py-4 px-20 text-white absolute bg-blue-500 bg-opacity-80 rounded-md">
        <h1 className="text-6xl font-semibold">Latest Post</h1>
        <p className="font-semibold text-md text-neutral-300 ml-1">What's new with DumbCode.</p>
      </div>
      {latestPost && <HeroPost post={latestPost} />}
      <section className="w-screen bg-neutral-900 bg-opacity-60 pt-10 overflow-hidden">
        <Container>
          <div className="text-center lg:text-left my-10 w-full text-white">
            <h1 className="text-6xl font-semibold">Other Posts</h1>
            <p className="font-semibold text-md text-neutral-500 ml-1">See Updates on what we've got cooking.</p>
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </section>
      <Footer />
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

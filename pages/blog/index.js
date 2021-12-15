import Container from '../../components/blog/container'
import HeroPost from '../../components/blog/heropost'
import MoreStories from '../../components/blog/morestories'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { getAllPosts } from '../../lib/blogapi'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <div className="overflow-x-hidden">
      <Header pageName="Blog" />
      <Navbar />
      <Container>
        <div className="pt-10"></div>
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
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

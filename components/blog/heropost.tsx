import Link from 'next/link'
import { useRouter } from 'next/router'
import { PostType } from '../../lib/blogapi'
import Container from './container'
import DateFormatter from './dateformatter'

export default function HeroPost({ post }: { post: PostType }) {

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
        <div className="text-white grid grid-flow-row grid-cols-2">
          <div className="bg-neutral-900 p-4 pl-10 rounded-md -translate-y-20">
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-bold">
              {post.title}
            </h3>
            <div className="w-full">
              <button className="bg-blue-500 text-white py-2 px-10 rounded-md absolute right-0 mr-10">Read More</button>
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

const Avatar = ({ name, picture }: {name: string, picture: string}) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

const CoverImage = ({ title, src, slug }: {title: string, src: string, slug: string | undefined}) => {
  
  const image = (
    <div className="bg-cover bg-center h-[80vh] w-screen" style={{ backgroundImage: `url("${src}")` }}></div>
  )

  return (
    <div className="sm:mx-0">
      {slug ? <Link as={`/blog/${slug}`} href="/blog/[slug]"><a aria-label={title}>{image}</a></Link> : image}
    </div>
  )
}
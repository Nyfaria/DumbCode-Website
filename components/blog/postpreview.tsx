import Link from 'next/link'
import { PostType } from '../../lib/blogapi'
import DateFormatter from './dateformatter'

export default function PostPreview({ post }: { post: PostType }) {

  return (
    <div className="mr-8 rounded-md bg-neutral-700 relative">
      <CoverImage
        slug={post.slug}
        title={post.title}
        src={post.coverImage}
      />
      <Avatar name={post.author.name} picture={post.author.picture} />
      <div className="py-4 px-8 text-white">
        <h3 className="text-2xl mb-3 leading-snug">
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
            <a className="hover:underline font-semibold">{post.title}</a>
          </Link>
        </h3>
        <div className="mb-2">
          <DateFormatter dateString={post.date} />
        </div>
        <p className="text-xs leading-relaxed mb-4">{post.excerpt}</p>
      </div>
    </div>
  )
}

const Avatar = ({ name, picture }: {name: string, picture: string}) => {
  return (
    <div className="absolute right-0 flex items-center text-white -translate-y-14">
      <div className="font-semibold pb-0.5 bg-blue-500 px-5 rounded-l-md translate-x-2">{name}</div>
      <img src={picture} className="w-12 h-12 rounded-full mr-4 z-10" alt={name} />
    </div>
  )
}

const CoverImage = ({ title, src, slug }: { title: string, src: string, slug: string | undefined }) => {

  const image = (
    <div className="bg-cover bg-center aspect-video w-full rounded-t-md" style={{ backgroundImage: `url("${src}")` }}></div>
  )

  return (
    <div className="sm:mx-0">
      {slug ? <Link as={`/blog/${slug}`} href="/blog/[slug]"><a aria-label={title}>{image}</a></Link> : image}
    </div>
  )
}
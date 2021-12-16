import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '../lib/blogapi'
import BackgroundImage from './BackgroundImage'
import DateFormatter from './DateFormatter'

export default function FeaturedPostList({ posts }: { posts: PostType[] }) {
  return (
    <section className="pb-10">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </div>
    </section>
  )
}

const PostPreview = ({ post }: { post: PostType }) => {

  return (
    <div className="rounded-md bg-neutral-700 relative mb-4">
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

const Avatar = ({ name, picture }: { name: string, picture: string }) => {
  return (
    <div className="absolute right-0 flex items-center text-white -translate-y-14 mr-4">
      <div className="font-semibold pb-0.5 bg-blue-500 px-5 rounded-l-md translate-x-2">{name}</div>
      <Image src={picture} width={48} height={48} className="w-12 h-12 rounded-full mr-4 z-10" alt={name} />
    </div>
  )
}

const CoverImage = ({ title, src, slug }: { title: string, src: string, slug: string | undefined }) => {

  const image = (
    <div className="bg-cover bg-center aspect-video w-full rounded-t-md">
      <BackgroundImage className="rounded-t-md" src={src} width={640} height={360} />
    </div>
  )

  return (
    <div className="sm:mx-0">
      {slug ? <Link as={`/blog/${slug}`} href="/blog/[slug]"><a aria-label={title}>{image}</a></Link> : image}
    </div>
  )
}
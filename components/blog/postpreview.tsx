import Link from 'next/link'
import { PostType } from '../../lib/blogapi'
import Avatar from './avatar'
import CoverImage from './coverimage'
import DateFormatter from './dateformatter'

export default function PostPreview({ post }: {post: PostType}) {

  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={post.slug}
          title={post.title}
          src={post.coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
          <a className="hover:underline">{post.title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={post.date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
      <Avatar name={post.author.name} picture={post.author.picture} />
    </div>
  )
}

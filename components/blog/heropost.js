import Link from 'next/link'
import Avatar from './avatar'
import CoverImage from './coverimage'
import DateFormatter from './dateformatter'

export default function HeroPost({post}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={post.title}
          src={post.coverImage}
          slug={post.slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
              <a className="hover:underline">{post.title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={post.date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
          <Avatar name={post.author.name} picture={post.author.picture} />
        </div>
      </div>
    </section>
  )
}

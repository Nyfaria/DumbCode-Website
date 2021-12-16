import { PostType } from '../../lib/blogapi'
import PostPreview from './postpreview'

export default function MoreStories({ posts }: {posts: PostType[] }) {
  return (
    <section className="pb-10">
      <div className="grid grid-cols-3">
        {posts.map((post) => (
          <PostPreview post={ post } />
        ))}
      </div>
    </section>
  )
}

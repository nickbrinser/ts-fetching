import { Post } from '../shared/types'

function BlogPosts({ data }: { data: Post[] }) {
  return (
    <div>
      {data.map(post => (
        <article
          key={post.id}
          style={{
            border: '1px solid darkgray',
            margin: '1rem',
            padding: '1rem',
          }}
        >
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>
      ))}
    </div>
  )
}
export default BlogPosts

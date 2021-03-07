function FetchPosts({ getPosts }: { getPosts: () => void }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>Not asked for posts yet</div>
      <button onClick={getPosts}>Fetch Posts</button>
    </div>
  )
}

export default FetchPosts

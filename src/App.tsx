import React, { useState } from 'react'
import './App.css'
import BlogPosts from './components/BlogPosts'
import Failure from './components/Failure'
import FetchPosts from './components/FetchPosts'
import Loading from './components/Loading'
import { RemoteData, Post } from './shared/types'

import { fetchPosts } from './utils/apiCalls'
import { foldRemoteData } from './utils/foldRemoteData'

function App(): JSX.Element {
  const [posts, setPosts] = useState<RemoteData<Error, Post[]>>({
    type: 'NOT_ASKED',
  })

  const getPosts = () => {
    setPosts({ type: 'LOADING' })
    fetchPosts().then(remoteData => setPosts(remoteData))
  }
  // this reminds me of pipe minus the currying
  return foldRemoteData(
    posts,
    () => <FetchPosts getPosts={getPosts} />,
    () => <Loading />,
    error => <Failure error={error} />,
    data => <BlogPosts data={data} />
  )
}

export default App

import { Codec, string, array, GetType, number } from 'purify-ts/Codec'

export type RemoteData<E, D> =
  | { type: 'NOT_ASKED' }
  | { type: 'LOADING' }
  | { type: 'FAILURE'; error: E }
  | { type: 'SUCCESS'; data: D }

export const Post = Codec.interface({
  id: number,
  title: string,
  body: string,
})

export type Post = GetType<typeof Post>

export const PostList = array(Post)

export type PostList = GetType<typeof PostList>

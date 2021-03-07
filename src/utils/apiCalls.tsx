import { RemoteData, PostList } from '../shared/types'

export async function fetchPosts(): Promise<RemoteData<Error, PostList>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  try {
    if (!response.ok) throw await response.json()
    const data = await response.json()

    return PostList.decode(data).caseOf({
      Left: err => ({ type: 'FAILURE', error: Error(err) } as RemoteData<Error, PostList>),
      Right: successData => {
        return { type: 'SUCCESS', data: successData } as RemoteData<Error, PostList>
      },
    })
  } catch (e) {
    return { type: 'FAILURE', error: e }
  }
}

// export async function fetchPosts(): Promise<RemoteData<Error, Post[]>> {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')

//     if (!response.ok) throw await response.json()

//     const data = await response.json()

//     return { type: 'SUCCESS', data: data }
//   } catch (e) {
//     return { type: 'FAILURE', error: e }
//   }
// }

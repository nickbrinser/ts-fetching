import { RemoteData } from '../shared/types'
// keep fp-ts in mind with ADTs Option, Either
export function foldRemoteData<R, E, D>(
  remoteData: RemoteData<E, D>,
  notAsked: () => R,
  loading: () => R,
  failure: (error: E) => R,
  success: (data: D) => R
): R {
  switch (remoteData.type) {
    case 'NOT_ASKED':
      return notAsked()
    case 'LOADING':
      return loading()
    case 'FAILURE':
      return failure(remoteData.error)
    case 'SUCCESS':
      return success(remoteData.data)
  }
}

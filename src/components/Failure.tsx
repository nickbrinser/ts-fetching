function Failure({ error }: { error: Error }) {
  return <div>Error: {error.message}</div>
}

export default Failure

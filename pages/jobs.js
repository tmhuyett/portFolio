export function Home() {
  const { data, loading, error } = useFetch("https://localhost:4000")

  if (error) {
    console.log(error)
  }

  return <>n</>
}

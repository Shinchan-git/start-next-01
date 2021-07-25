export default function Home() {
  const key = process.env.NEXT_PUBLIC_KEY

  return (
    <h1>Hello! {key}</h1>
  )
}

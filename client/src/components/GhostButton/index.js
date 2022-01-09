export default function button({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent text-bold px-6 py-2 text-black border-2 border-black">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent text-bold px-6 py-2 text-black border-2 border-black">{buttonName}</button>
  )
}

export default function button({ props }) {
  if (!props) {
    return (
      <button className="bg-black text-bold px-6 py-2 border-black border-2 text-white tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-black text-bold px-6 py-2 border-black border-2 text-white tracking-widest">{buttonName}</button>
  )
}

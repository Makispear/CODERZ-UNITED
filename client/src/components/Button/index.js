export default function button({ props }) {
  if (!props) {
    return (
      <button className="bg-secondary hover:bg-white font-bold px-6 py-2 border-black border-2 text-black tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-secondary hover:bg-white font-bold px-6 py-2 border-black border-2 text-black tracking-widest">{buttonName}</button>
  )
}

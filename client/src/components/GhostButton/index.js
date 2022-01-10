export default function button({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent font-bold px-6 py-2 border-tertiary border-2 text-secondary hover:text-white tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent font-bold px-6 py-2 border-tertiary border-2 text-secondary hover:text-white tracking-widest">{buttonName}</button>
  )
}

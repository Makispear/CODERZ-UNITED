export default function Primary({ props }) {
  if (!props) {
    return (
      <button className="bg-black font-bold text-white px-6 py-2 border-2 border-secondary hover:border-black uppercase tracking-wider">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-black font-bold text-white px-6 py-2 border-2 border-secondary hover:border-black uppercase tracking-wider">{buttonName}</button>
  )
}

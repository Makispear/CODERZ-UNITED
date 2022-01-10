export default function Primary({ props }) {
  if (!props) {
    return (
      <button className="bg-black hover:border-black font-bold px-6 py-2 border-tertiary border-2 text-white tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-black hover:border-black font-bold px-6 py-2 border-tertiary border-2 text-white tracking-widest">{buttonName}</button>
  )
}

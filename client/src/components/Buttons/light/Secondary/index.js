export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent text-black px-6 py-2 border-2 border-tertiary hover:border-black font-semibold uppercase">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent text-black px-6 py-2 border-2 border-tertiary hover:border-black font-semibold uppercase">{buttonName}</button>
  )
}

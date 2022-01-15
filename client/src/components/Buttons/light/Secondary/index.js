export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent text-black button-style border-2 border-tertiary hover:border-black font-semibold uppercase">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent text-black button-style border-2 border-tertiary hover:border-black font-semibold uppercase">{buttonName}</button>
  )
}

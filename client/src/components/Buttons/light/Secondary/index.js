export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent primary-radius text-black button-style border border-tertiary hover:border-black font-light capitalize">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent primary-radius text-black button-style border border-tertiary hover:border-black font-light capitalize">{buttonName}</button>
  )
}

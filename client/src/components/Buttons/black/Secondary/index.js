export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent text-secondary button-style border-2 border-tertiary hover:border-secondary font-semibold uppercase">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent text-secondary button-style border-2 border-tertiary hover:border-secondary font-semibold uppercase">{buttonName}</button>
  )
}

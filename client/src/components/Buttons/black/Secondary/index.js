export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent text-secondary primary-radius button-style border border-tertiary hover:border-secondary font-light capitalize">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent text-secondary primary-radius button-style border border-tertiary hover:border-secondary font-light capitalize">{buttonName}</button>
  )
}

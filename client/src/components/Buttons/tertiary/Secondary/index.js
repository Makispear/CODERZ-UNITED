export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent font-light primary-radius hover:border-secondary button-style border-black border text-black">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent font-light primary-radius hover:border-secondary button-style border-black border text-black">{buttonName}</button>
  )
}

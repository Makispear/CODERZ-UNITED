export default function PrimaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-black primary-radius font-bold text-white button-style border-2 border-secondary hover:border-black capitalize tracking-wider">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-black primary-radius font-bold text-white button-style border-2 border-secondary hover:border-black capitalize tracking-wider">{buttonName}</button>
  )
}

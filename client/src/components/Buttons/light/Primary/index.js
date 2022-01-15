export default function PrimaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-black font-bold text-white button-style border-2 border-secondary hover:border-black uppercase tracking-wider">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-black font-bold text-white button-style border-2 border-secondary hover:border-black uppercase tracking-wider">{buttonName}</button>
  )
}

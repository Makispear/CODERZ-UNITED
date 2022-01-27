export default function PrimaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-black hover:border-black font-bold button-style primary-radius border-tertiary border-2 text-white tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-black hover:border-black font-bold button-style primary-radius border-tertiary border-2 text-white tracking-widest">{buttonName}</button>
  )
}

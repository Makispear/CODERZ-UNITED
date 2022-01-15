export default function SecondaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent font-semibold hover:border-secondary button-style border-black border-2 text-black tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent font-semibold hover:border-secondary button-style border-black border-2 text-black tracking-widest">{buttonName}</button>
  )
}

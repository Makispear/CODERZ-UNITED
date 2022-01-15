export default function PrimaryButton({ props }) {
  if (!props) {
    return (
      <button className="button-style bg-white hover:border-white font-bold border-black border-2 text-black tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-white button-style hover:border-white font-bold border-black border-2 text-black tracking-widest">{buttonName}</button>
  )
}

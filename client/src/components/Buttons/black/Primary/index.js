export default function PrimaryButton({ props }) {
  if (!props) {
    return (
      <button className="button-style bg-white hover:border-white primary-radius font-bold border-black border-2 text-black tracking-widest capitalize">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-white button-style hover:border-white primary-radius font-bold border-black border-2 text-black tracking-widest capitalize">{buttonName}</button>
  )
}

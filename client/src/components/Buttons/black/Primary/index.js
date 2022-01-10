export default function PrimaryButton({ props }) {
  if (!props) {
    return (
      <button className="bg-white hover:border-white font-bold px-6 py-2 border-black border-2 text-black tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-white hover:border-white font-bold px-6 py-2 border-black border-2 text-black tracking-widest">{buttonName}</button>
  )
}

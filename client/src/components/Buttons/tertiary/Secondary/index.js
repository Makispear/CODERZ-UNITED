export default function Secondary({ props }) {
  if (!props) {
    return (
      <button className="bg-transparent font-semibold hover:border-secondary px-6 py-2 border-black border-2 text-black tracking-widest">Button</button>
    )
  }
  const { buttonName } = props
  return (
    <button className="bg-transparent font-semibold hover:border-secondary px-6 py-2 border-black border-2 text-black tracking-widest">{buttonName}</button>
  )
}

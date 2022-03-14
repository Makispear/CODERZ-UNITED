export default function NoteMessage({ props }) {
  const { name, note } = props

  return (
    <aside className="w-full p-2 my-4 bg-orange-50 primary-radius">
      <div className="flex items-center careful-word mb-2 px-2">
        <span className="text-3xl mr-4 text-center">⚠</span>
        <h2 className="h3-style careful-word">{name}</h2>
      </div>
      <div className="flex justify-center text-start">
        <p className="">
          {note}
        </p>
      </div>
    </aside>
  )
}

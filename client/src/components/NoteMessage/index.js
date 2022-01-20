export default function NoteMessage({ props }) {
  const { name, note } = props

  return (
    <div className="w-full p-2 my-4">
      <div className="border-t-2 border-orange-400 flex items-center careful-word mb-2 px-2">
        <span className="text-3xl">⚠</span>
        <h2 className="h3-style careful-word">{name}:</h2>
      </div>
      <div className="flex justify-center text-start border-b-2 border-orange-400 ">
        <p className="">
          {note}
        </p>
      </div>
    </div>
  )
}

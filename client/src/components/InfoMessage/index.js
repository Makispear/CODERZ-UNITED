export default function InfoMessage({ props }) {
  const { name, note } = props

  return (
    <aside className="w-full p-2 my-4">
      <div className="border-t-2 border-new flex items-center new-word mb-2 px-2">
        <span className="text-3xl w-10 border-2 rounded-full mr-4 text-center text-new">ℹ</span>
        <h2 className="h3-style new-word">{name}:</h2>
      </div>
      <div className="flex justify-center text-start border-b-2 border-new ">
        <p className="">
          {note}
        </p>
      </div>
    </aside>
  )
}

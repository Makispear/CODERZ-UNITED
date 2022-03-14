export default function InfoMessage({ props }) {
  const { name, note } = props

  return (
    <aside className="w-full p-2 my-4 bg-slate-100 primary-radius">
      <div className=" flex items-center new-word mb-2 px-2">
        <span className="text-3xl mr-4 text-center text-new">ℹ</span>
        <h2 className="h3-style new-word">{name}</h2>
      </div>
      <div className="flex justify-center text-start ">
        <p className="">
          {note}
        </p>
      </div>
    </aside>
  )
}

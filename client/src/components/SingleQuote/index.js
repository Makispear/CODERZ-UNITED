export default function SingleQuote({ props }) {
  const { title, source, date } = props
  console.log(title, source)
  return (
    <div className="p-5 flex flex-col w-700 border-2 border-darkGray bg-black shadow-lg mt-10">
      <h2 className="capitalize text-2xl font-semibold mb-4 text-secondary">{title}
      </h2>
      <div className="text-secondary mb-10 font-light text-sm">
        <p>
          - {date}
        </p>
      </div>
      <p className="text-tertiary font-light">- {source}</p>
    </div>
  )
}

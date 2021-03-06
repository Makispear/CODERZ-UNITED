export default function SingleQuote({ props }) {
  const { title, source, date } = props
  return (
    <article className="p-5 flex flex-col w-700 border-2 primary-radius border-secondary bg-black shadow-lg mt-10">
      <h2 className="h3-style font-semibold mb-4 text-secondary">{title}</h2>
      <div className="text-darkGray mb-10 font-light text-sm">
        <p className="italic w-full">
          - {date}
        </p>
      </div>
      <p className="text-tertiary font-light">- {source}</p>
    </article>
  )
}

import SingleQuote from "../SingleQuote"

export default function Quotes() {
  return (
    <section className="w-full min-h-screen p-32 flex flex-wrap flex-col justify-between">
      <div className="flex justify-between flex-wrap">
        <div className="grid place-items-center">
          <h2 className="text-4xl font-bold w-700 text-white">WHY STUDY 4 YEARS JUST TO START <span className="text-tertiary">?</span></h2>
        </div>
        <SingleQuote />
      </div>
      <div className="flex justify-between flex-wrap">
        <SingleQuote />
        <div className="grid place-items-center">
          <h2 className="text-4xl font-bold text-white uppercase">College is not the only way<span className="text-tertiary">!</span></h2>
        </div>
      </div>
    </section>
  )
}

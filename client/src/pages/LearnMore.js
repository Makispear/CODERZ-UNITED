export default function LearnMore() {

  const goBack = () => {
    window.history.back()
  }

  return (
    <section className="text-white z-50 w-full bg-black flex flex-col items-center text-start sm:pt-20 md:pt-40">
      <div className="w-full flex justify-center font-bold my-10 text-center capitalize">
        <h1>About Coderz United</h1>
      </div>

      <div className="indent-8 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5 text-secondary">
        <p className="w-full text-secondary">
          Coderz United is an educational institution founded in Connecticut in 2022. Its vision is to bring high-quality educational content to everybody everywhere. Coderz United is the ultimate solution for coders who can't afford the expensive university classes but still want a high-level education.
        </p>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5 text-white">
        <h2>
          Our Mission
        </h2>
        <ul className="text-secondary">
          <li>
            <p>
              - To bring educational content that everyone can access.
            </p>
          </li>
          <li>
            <p>
              - To bring high-quality content to replace high-level University courses.
            </p>
          </li>
        </ul>

      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2>
          Our Values & Promise
        </h2>
        <p className="w-full text-secondary">
          We value <span className="text-tertiary">trust</span> and <span className="text-tertiary">unity.</span> Our promise is to bring content that will help the world evolve into something great.
        </p>
      </div>


      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">

        <button className="bg-transparent text-secondary button-style border-2 border-tertiary hover:border-secondary font-semibold uppercase" onClick={goBack}>back</button>

        {/* <button className="button-style bg-white hover:border-white font-bold border-black border-2 text-black tracking-widest uppercase">mark complete</button> */}
      </div>

    </section>
  )
}


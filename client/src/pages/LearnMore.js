export default function LearnMore() {

  const goBack = () => {
    window.history.back()
  }

  return (
    <section className="text-white z-50 w-full bg-black flex flex-col items-center text-start sm:pt-20 md:pt-40">
      <div className="w-full flex justify-center font-bold my-10 text-center capitalize">
        <h1>About Coderz United</h1>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5 font-bold">
        <h2 className="text-tertiary">Our Mission</h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5 text-secondary">
        <h3 className="h2-style">
          Coderz United has two main Missions:
        </h3>
        <ul>
          - Making every United Coder succeed.
          <li>
          </li>
          <li>
            - Uniting with Educational institutions
          </li>
        </ul>

      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-white font-semibold mb-2 h3-style">
          Our Values
        </h2>
        <p className="w-full text-secondary">
          We value Honestly and trust! Building tech leading educational institution is what we bring!
        </p>
      </div>


      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">

        <button className="bg-transparent text-secondary button-style border-2 border-tertiary hover:border-secondary font-semibold uppercase" onClick={goBack}>back</button>

        {/* <button className="button-style bg-white hover:border-white font-bold border-black border-2 text-black tracking-widest uppercase">mark complete</button> */}
      </div>

    </section>
  )
}


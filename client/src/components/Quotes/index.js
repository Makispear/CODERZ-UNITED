import SingleQuote from "../SingleQuote"

export default function Quotes() {
  const source1 = {
    title: "Elon Musk said a college degree isn't required for a job at Tesla — and Apple, Google, and Netflix don't require employees to have 4-year degrees either",
    source: "Allana Akhtar Updated Dec 27, 2020, 9:39 AM - INSIDER",
    date: "Updated Dec 27, 2020, 9:39 AM"
  }
  const source2 = {
    title: "Apple CEO Tim Cook even said in 2019 that about half of Apple's US employment last year was made up of people who did not have a four-year degree.",
    source: "Allana Akhtar Updated Dec 27, 2020, 9:39 AM - INSIDER",
    date: "Updated Dec 27, 2020, 9:39 AM"
  }
  const source3 = {
    title: "Google, Apple and 12 other companies that no longer require employees to have a college degree",
    date: "Published Mon, Oct 8 201812:51 PM EDTUpdated Mon, Oct 8 201812:51 PM EDT",
    source: "make it - Courtney Connley"
  }


  return (
    <section className="flex flex-col w-screen bg-darkGray">
      <div className="w-full p-10 sm:p-28 flex flex-wrap flex-col justify-between">
        <div className="flex justify-between flex-wrap h-full w-full mt-5">
          <div className="grid place-items-center">
            <h2 className="text-4xl font-bold uppercase text-white mt-5">why study 4 years just to start <span className="text-tertiary">?</span></h2>
          </div>
          <SingleQuote props={source1} />
        </div>
        <div className="flex justify-between flex-wrap h-full w-full mt-5">
          <SingleQuote props={source2} />
          <div className="grid place-items-center">
            <h2 className="text-4xl font-bold text-white uppercase mt-5">College is not the only way <span className="text-tertiary">!</span></h2>
          </div>
          <div className="flex justify-between flex-wrap h-full w-full mt-5">
            <div className="grid place-items-center">
              <h2 className="text-4xl font-bold text-white uppercase mt-5">Here's another one <span className="text-tertiary">...</span></h2>
            </div>
            <SingleQuote props={source3} />
          </div>
        </div>
      </div>
      <div className="text-white flex flex-wrap justify-center p-4 text-center font-bold">
        <h2 className=" text-4xl uppercase mt-5">
          You get the point <span className="text-tertiary">!</span>
        </h2>
      </div>
    </section>
  )
}

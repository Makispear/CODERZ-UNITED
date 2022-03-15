import { Link } from "react-router-dom";
import SingleQuote from "../components/SingleQuote"
import logo from "../assets/images/test.png"
import design from "../assets/images/design.jpg"
import frontend from "../assets/images/frontend.jpg"
import backend from "../assets/images/backend.png"
import { BrandName } from "../utils/BrandName";

export default function Home() {
  document.title = `${BrandName} | Learn Web Development & Design`

  const source1 = {
    title: "Elon Musk said a college degree isn't required for a job at Tesla — and Apple, Google, and Netflix don't require employees to have 4-year degrees either",
    source: "Allana Akhtar Updated Dec 27, 2020, 9:39 AM - INSIDER",
    date: "Updated Dec 27, 2020, 9:39 AM"
  }
  const source2 = {
    title: "Apple CEO Tim Cook even said in 2019 that about half of Apple's US employment last year was made up of people who did not have a four-year degree.",
    source: "Lisa Eadicicco - INSIDER",
    date: "Mar 7, 2019, 11:40 AM"
  }
  const source3 = {
    title: "Google, Apple and 12 other companies that no longer require employees to have a college degree",
    date: "Published Mon, Oct 8 201812:51 PM EDTUpdated Mon, Oct 8 201812:51 PM EDT",
    source: "make it - Courtney Connley"
  }

  return (
    <main>

      {/* HERO  */}
      <section className="sm:py-10 px-3 my-5 flex flex-wrap w-full justify-center sm:p-1 sm:mx-auto align-top bg-black text-center sm:text-left">
        <div className="w-full sm:w-full md:w-500 lg:w-900 order-last sm:order-last md:order-last lg:order-last xl:order-first align-center mt-14 h-max">
          <div>
            <h1 className="font-bold mx-auto sm:m-10 tracking-wide text-white leading-none capitalize">Learn web development  & design</h1>
          </div>
          <div>
            <p className="sm:mx-10 text-l mt-5 sm:text-2xl text-secondary font-light">"Two brains are better than one, three brains are better than two." How about all {BrandName}???</p>
          </div>
          <div className="gap-3 flex justify-center sm:justify-start flex-wrap mt-10 mx-auto sm:m-10">
            <Link to="/signup" className="button-style primary-radius bg-tertiary hover:border-tertiary font-bold border-secondary border-2 text-white tracking-widest capitalize">Get started</Link>
            <Link to="/learn_more" className="bg-transparent text-secondary button-style primary-radius border border-tertiary hover:border-secondary font-light capitalize">learn more</Link>
          </div>
        </div>

        <div className="sm:mx-10 flex justify-center w-max">
          <img className="w-28 sm:w-40 md:w-52 lg:w-80 xl:w-96" src={logo} alt="Coderz United's logo" />
        </div>

      </section>






      {/* OPTIONS */}
      <section className="w-full min-h-auto p-sm:py-10 px-3 my-5 bg-black">

        <div className="pl-5 sm:pl-20">
          <h2 className="font-bold text-white capitalize">Learn any stack <span className="text-tertiary">...</span></h2>
        </div>

        <div className="flex flex-wrap w-full justify-center my-10 gap-10 option-container">
          {/* here are the options section  */}
          <div className="flex flex-col mx-10 items-center">
            <img className="rounded-full w-60 h-60" src={design} alt="Design" />
            <h3 data-testid="design" className="w-max border-tertiary border-b-4 border-t-4 text-3xl my-3 font-semibold text-secondary design-font">DESIGN</h3>
            <p className="text-center paragraph-width font-light text-md text-secondary leading-7">
              IT professional responsible for designing the layout, visual appearance and the usability of a website.
            </p>
          </div>
          <div className="flex flex-col mx-10 items-center">
            <img className="rounded-full w-60 h-60" src={frontend} alt="Front End" />
            <h3 data-testid="frontEnd" className="  text-3xl my-3 font-semibold text-secondary"><span className="text-tertiary font-bold">&#60; </span>frontEnd<span className="text-tertiary font-bold"> &#62;</span></h3>
            <p className="text-center paragraph-width font-light text-md text-secondary leading-7">
              Development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with the website.
            </p>
          </div>
          <div className="flex flex-col mx-10 items-center">
            <img className="rounded-full w-60 h-60" src={backend} alt="Back End" />
            <h3 data-testid="backEnd" className="text-secondary text-3xl my-3 font-semibold"><span className="text-tertiary font-bold">&#60;&#47;</span> back_end <span className="text-tertiary font-bold"> &#62;</span></h3>
            <p className="text-center paragraph-width font-light text-md text-secondary leading-7">
              Makes use of the technology required to develop the products for the backend of any website. Responsible for building the structure of a software application.
            </p>
          </div>
        </div>

        <div className="w-full pr-5 sm:pr-20 flex justify-end">
          <h2 className="font-bold text-white capitalize"><span className="text-tertiary">... </span>Or all of them <span className="text-tertiary">:&#41;</span></h2>
        </div>
      </section>














      {/* BOARD  */}
      <section className="gird place-content-center py-36 sm:p-15 h-auto sm:min-h-screen w-full bg-black">

        <div className="hidden sm:grid place-content-center h-90 bg-chalkboard bg-no-repeat bg-contain bg-center">
          {/* show only on desktop  */}
          <ul className="grid h-full text-white h2-style text-start sm:text-start place-content-center gap-3">
            <li className="chalk-font capitalize">1. Walk-through videos</li>
            <li className="chalk-font capitalize">2. Examples</li>
            <li className="chalk-font capitalize">3. Deeper dives into concepts</li>
            <li className="chalk-font capitalize">4. Much more</li>
          </ul>
        </div>

        {/* show only on mobile  */}
        <div className="grid sm:hidden place-content-center bg-chalkboard bg-no-repeat bg-contain bg-center">
          <ul className="visible sm:hidden h-full text-white h2-style text-start sm:text-start place-content-center gap-3">
            <li className="chalk-font capitalize">1. Walk-through videos</li>
            <li className="chalk-font capitalize">2. Examples</li>
            <li className="chalk-font capitalize">3. Deeper dives into concepts</li>
            <li className="chalk-font capitalize">4. Much more</li>
          </ul>
        </div>

      </section>





















      {/* QUOTES  */}
      <section className="py-10 sm:px-3
                        flex flex-col w-full bg-black">
        <div className="w-full p-10 sm:p-28 flex flex-wrap flex-col justify-between">

          <div className="flex justify-around flex-wrap h-full w-full mt-5">
            <div className="grid place-items-center ">
              <h2 className="font-bold capitalize text-white mt-5">Listen to the leaders<span className="text-tertiary"> ...</span></h2>
            </div>
            <SingleQuote props={source1} />
          </div>

          <div className="flex justify-around flex-wrap h-full w-full mt-5">
            <SingleQuote props={source2} />
            <div className="grid place-items-center ">
              <h2 className="font-bold text-white capitalize mt-5">And Tech companies<span className="text-tertiary"> !</span></h2>
            </div>
            <div className="flex justify-around flex-wrap h-full w-full mt-5">
              <div className="grid place-items-center ">
                <h2 className="font-bold text-white capitalize mt-5">And Google<span className="text-tertiary"> ..?</span></h2>
              </div>
              <SingleQuote props={source3} />
            </div>
          </div>

        </div>
        <div className="w-full text-white flex flex-wrap justify-center p-4 text-center font-bold">
          <h2 className="capitalize mt-5">
            What are you waiting for?<a href="/signup" className="link"> Signup </a>/<a href="/login" className="link">Log in</a> now.
          </h2>
        </div>
      </section>
    </main>

  )
}


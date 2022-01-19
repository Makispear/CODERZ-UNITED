import PrimaryButton from "../Buttons/black/Primary"
import SecondaryButton from "../Buttons/black/Secondary"
// import PrimaryButton from "../Buttons/tertiary/Primary"
// import SecondaryButton from "../Buttons/tertiary/Secondary"
import logo from "../../assets/images/logo.svg"
import LearnMore from "../../pages/LearnMore"
import { Link } from "react-router-dom"

export default function Hero() {

  return (
    <section className="sm:py-10 px-3 my-5 flex flex-wrap w-full justify-center sm:p-1 sm:mx-auto align-top bg-black text-center sm:text-left">
      <div className="w-full sm:w-full md:w-2/3 lg:w-7/12
                       align-center
                      mt-14 sm:border-t-2 lg:border-l-2 sm:border-secondary h-max">
        <div>
          <h1 className="font-bold mx-auto sm:m-10 tracking-wide text-white leading-none">LEARN WEB DEVELOPMENT & DESIGN</h1>
        </div>
        <div>
          <h2 className="sm:mx-10 text-l mt-5 sm:text-2xl text-secondary font-light leading-none">CODERZ UNITED's mission is your success!</h2>
        </div>
        <div className="gap-2 flex flex-wrap m-14">
          <PrimaryButton props={{ buttonName: "GET STARTED" }} />
          <Link to="/learn_more" className="bg-transparent text-secondary button-style border-2 border-tertiary hover:border-secondary font-semibold uppercase">learn more</Link>
        </div>
      </div>

      <div className="sm:mx-10 flex justify-center w-max">
        <img className="hidden lg:inline sm:w-96 h-96" src={logo} alt="Huge logo" />
      </div>

    </section>
  )
}

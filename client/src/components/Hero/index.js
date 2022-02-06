import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"

export default function Hero() {

  return (
    <section className="sm:py-10 px-3 my-5 flex flex-wrap w-full justify-center sm:p-1 sm:mx-auto align-top bg-black text-center sm:text-left">
      <div className="w-full sm:w-full md:w-2/3 lg:w-7/12
                       align-center
                      mt-14 sm:border-t-2 lg:border-l-2 sm:border-secondary h-max">
        <div>
          <h1 className="font-bold mx-auto sm:m-10 tracking-wide text-white leading-none capitalize">Learn web development  & design</h1>
        </div>
        <div>
          <p className="sm:mx-10 text-l mt-5 sm:text-2xl text-secondary font-light">"Two brains are better than one, three brains are better than two." How about every coder united???</p>
        </div>
        <div className="gap-2 flex justify-center sm:justify-start flex-wrap m-14">
          <Link to="/signup" className="button-style primary-radius bg-tertiary hover:border-tertiary font-bold border-secondary border-2 text-white tracking-widest capitalize">Get started</Link>
          <Link to="/learn_more" className="bg-transparent text-secondary button-style primary-radius border border-tertiary hover:border-secondary font-light capitalize">learn more</Link>
        </div>
      </div>

      <div className="sm:mx-10 flex justify-center w-max">
        <img className="hidden lg:inline sm:w-96 h-96" src={logo} alt="Huge logo" />
      </div>

    </section>
  )
}

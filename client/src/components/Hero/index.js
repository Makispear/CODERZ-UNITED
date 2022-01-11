import PrimaryButton from "../Buttons/black/Primary"
import SecondaryButton from "../Buttons/black/Secondary"
// import PrimaryButton from "../Buttons/tertiary/Primary"
// import SecondaryButton from "../Buttons/tertiary/Secondary"
import logo from "../../assets/images/logo.png"

export default function Hero() {
  return (
    <section className=" sm:py-10 sm:p-28 px-3 my-10 lg:py-10 flex flex-wrap w-full justify-center lg:justify-center sm:p-1 sm:justify-center sm:mx-auto align-top bg-black">
      <div className="w-4/5 sm:w-5/6 md:w-3/5 mt-14 sm:border-t-2 sm:border-l-2 sm:border-secondary h-max">
        <div>
          <h1 className="sm:w-2/3 text-4xl sm:text-6xl font-bold mx-auto sm:m-10 tracking-wide text-white">LEARN WEB DEVELOPMENT & DESIGN</h1>
        </div>
        <div>
          <p className="sm:mx-10 text-l mt-5 sm:text-2xl text-secondary font-light">CODERZ UNITED's mission is your success!</p>
        </div>
        <div className="sm:mx-10 sm:py-6 flex mt-14">
          <div className=" mr-9">
            <PrimaryButton props={{ buttonName: "GET STARTED" }} />
          </div>
          <div>
            <SecondaryButton props={{ buttonName: "LEARN MORE" }} />
          </div>
        </div>
      </div>
      <div className="sm:mx-10 flex justify-center w-max">
        <img className="sm:w-96 h-96" src={logo} alt="Huge logo" />
      </div>
    </section>
  )
}

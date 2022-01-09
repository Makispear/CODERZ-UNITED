import GhostButton from "../GhostButton"
import Button from "../Button"
import logo from "../../assets/images/logo.png"

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="sm:py-10 mx-3 my-10 p-4 md:p-14 flex flex-wrap w-full justify-center sm:p-16">
        <div className="sm:w-3/5">
          <div>
            <h2 className="text-6xl font-bold sm:m-10 tracking-wider">LEARN WEB DEVELOPMENT FOR FREE</h2>
          </div>
          <div>
            <p className="sm:mx-10 text-2xl text-darkGray">Lorem ipsum here for a paragrapgh that doesn look so bad and something to describe the website</p>
          </div>
          <div className="sm:mx-10 sm:py-6 flex mt-14">
            <div className=" mr-9">
              <Button props={{ buttonName: "GET STARTED" }} />
            </div>
            <GhostButton props={{ buttonName: "LEARN MORE" }} />
          </div>
        </div>
        <div className="sm:mx-10 flex justify-center w-max">
          <img className="sm:w-96 h-96" src={logo} alt="Huge logo" />
        </div>
      </div>
    </section>
  )
}

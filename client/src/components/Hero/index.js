import GhostButton from "../GhostButton"
import Button from "../Button"

export default function Hero() {
  return (
    <section className="">
      <div className="pt-10 mx-3 mt-10 sm:p-14 flex flex-wrap w-full justify-between sm:p-16">
        <div>
          <div>
            <h2 className="text-6xl font-bold sm:m-10">LEARN WEB DEVELOPMENT FOR FREE</h2>
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
        <div className="sm:mx-10 ">
          <img src="#" alt="Huge logo" />
        </div>
      </div>
    </section>
  )
}

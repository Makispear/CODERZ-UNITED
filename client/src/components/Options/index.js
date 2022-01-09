import frontend from "../../assets/images/frontend.jpg"
import backend from "../../assets/images/backend.png"
import design from "../../assets/images/design.jpg"

export default function Options() {
  return (
    <section className="w-full min-h-screen">

      <div className="pl-5 sm:pl-40">
        <h2 className="text-4xl font-bold">LEARN ANY STACK <span className="text-tertiary">...</span></h2>
      </div>

      <div className="flex flex-wrap w-full justify-center my-40">
        {/* here are the options section  */}
        <div className="flex flex-col items-center mt-10">
          <img className="rounded-full w-60 h-60" src={design} alt="Design" />
          <h3 className="w-max border-tertiary border-b-8 border-t-8  text-3xl my-3 font-semibold">DESIGN</h3>
          <p className="text-center w-96 font-light text-darkGray">
            A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <img className="rounded-full w-60 h-60" src={frontend} alt="Front End" />
          <h3 className="  text-3xl my-3 font-semibold"><span className="text-tertiary font-bold">&#60; </span>frontEnd<span className="text-tertiary font-bold"> &#62;</span></h3>
          <p className="text-center w-96 font-light text-darkGray">
            A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <img className="rounded-full w-60 h-60" src={backend} alt="Back End" />
          <h3 className="  text-3xl my-3 font-semibold"><span className="text-tertiary font-bold">&#60;</span> back_end <span className="text-tertiary font-bold">&#47; &#62;</span></h3>
          <p className="text-center w-96 font-light text-darkGray">
            A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
          </p>
        </div>
      </div>

      <div className="w-full pr-5 sm:pr-40 flex justify-end">
        <p className="text-4xl font-bold"><span className="text-tertiary">... </span>OR ALL OF THEM <span className="text-tertiary">:&#41;</span></p>
      </div>
    </section>
  )
}

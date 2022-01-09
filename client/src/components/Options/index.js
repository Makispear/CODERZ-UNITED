import frontend from "../../assets/images/frontend.jpg"
import backend from "../../assets/images/backend.png"
import design from "../../assets/images/design.jpg"

export default function Options() {
  return (
    <section className="w-full min-h-screen mt-40">

      <div className="pl-40">
        <h2 className="text-56 font-bold">LEARN ANY STACK <span className="text-tertiary">...</span></h2>
      </div>

      <div className="p-40">
        {/* here are the options section  */}
        <div className="flex">
          <div className="flex flex-col items-center">
            <img className="rounded-full w-60 h-60" src={design} alt="Design" />
            <h3 className="w-max border-tertiary border-b-8 border-t-8">DESIGN</h3>
            <p className="text-center">
              A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="rounded-full w-60 h-60" src={frontend} alt="Front End" />
            <h3 className=""><span className="text-tertiary">&#60; </span>frontEnd<span className="text-tertiary"> &#62;</span></h3>
            <p className="text-center">
              A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="rounded-full w-60 h-60" src={backend} alt="Back End" />
            <h3><span className="text-tertiary">&#60;</span> back_end <span className="text-tertiary">&#47; &#62;</span></h3>
            <p className="text-center">
              A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full pr-40 flex justify-end">
        <p className="text-42 font-bold">OR ALL OF THEM <span className="text-tertiary">:&#41;</span></p>
      </div>
    </section>
  )
}

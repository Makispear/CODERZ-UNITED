import frontend from "../../assets/images/frontend.jpg"
import backend from "../../assets/images/backend.png"
import design from "../../assets/images/design.jpg"

export default function Options() {
  return (
    <section className="w-full min-h-screen sm:py-10 px-3">

      <div className="pl-5 sm:pl-40">
        <h2 className="text-4xl font-bold text-white">LEARN ANY STACK <span className="text-tertiary">...</span></h2>
      </div>

      <div className="flex flex-wrap w-full justify-center my-40">
        {/* here are the options section  */}
        <div className="flex flex-col items-center mt-10 mx-5 ">
          <img className="rounded-full w-60 h-60" src={design} alt="Design" />
          <h3 className="w-max border-tertiary border-b-4 border-t-4 text-3xl my-3 font-semibold text-secondary">DESIGN</h3>
          <p className="text-center w-96 font-light text-md text-secondary leading-7">
            A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 mx-5 ">
          <img className="rounded-full w-60 h-60" src={frontend} alt="Front End" />
          <h3 className="  text-3xl my-3 font-semibold text-secondary"><span className="text-tertiary font-bold">&#60; </span>frontEnd<span className="text-tertiary font-bold"> &#62;</span></h3>
          <p className="text-center w-96 font-light text-md text-secondary leading-7">
            Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 mx-5 ">
          <img className="rounded-full w-60 h-60" src={backend} alt="Back End" />
          <h3 className="text-secondary text-3xl my-3 font-semibold"><span className="text-tertiary font-bold">&#60;&#47;</span> back_end <span className="text-tertiary font-bold"> &#62;</span></h3>
          <p className="text-center w-96 font-light text-md text-secondary leading-7">
            A backend developer is one who makes use of the technology required to develop the products for the backend of any website. A backend developer is responsible for building the structure of a software application. Backend developers typically work in groups or with a team
          </p>
        </div>
      </div>

      <div className="w-full pr-5 sm:pr-40 flex justify-end">
        <p className="text-4xl font-bold text-white"><span className="text-tertiary">... </span>OR ALL OF THEM <span className="text-tertiary">:&#41;</span></p>
      </div>
    </section>
  )
}

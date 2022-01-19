import { NavLink } from "react-router-dom";

export default function PreModules() {
  return (
    <section className="flex flex-col w-full items-center p-2 sm:p-7 md:p-32 bg-black text-white">
      <div className="flex flex-col items-center">
        <h1>
          Getting Started
        </h1>
        <p className="text-center text-secondary">
          This is the first step! Every united coder gets the previlage of having a great head start! 🙂
        </p>
      </div>


      <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
        <p>(1/4) completed</p>
      </div>

      {/* Modules  */}
      <div className="w-full flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black gap-4 text-black">

        <NavLink to={"/frequently_asked_questions"}>
          <div className="flex justify-between items-center p-5 border-2 border-black bg-tertiary hover:bg-secondary">
            <div>
              <p>
                <span className="font-bold capitalize">1. Frequently asked Questions - </span> Is this course for you?
              </p>
            </div>
            <div className="checkMark">
              <div className="marked"></div>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/installations"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiaryDark">
            <div>
              <p>
                <span className="font-bold capitalize">2. Installations:</span> Getting the tools?
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiaryDark">
            <div>
              <p>
                <span className="font-bold capitalize">1. Web development:</span> Is this for me?
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/"}>
          <div className="flex justify-between items-center p-5 border-2 border-black text-black bg-tertiaryDark">
            <div>
              <p>
                <span className="font-bold capitalize">1. Web development:</span> Is this for me?
              </p>
            </div>
          </div>
        </NavLink>

      </div>


    </section>
  )
}

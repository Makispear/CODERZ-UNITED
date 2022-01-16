export default function PreModules() {
  return (
    <section className="flex flex-col w-full justify-center p-5 sm:p-10">
      <div className="flex flex-col items-center">
        <h1>
          Getting Started
        </h1>
        <p className="text-center">
          This is the first step! Every united coder gets the previlage of having a great head start! 🙂
        </p>
      </div>

      {/* Modules  */}
      <div className="w-full flex flex-col bg-secondary p-10 gap-4">
        <div className="flex justify-between items-center p-5 border-2 border-black">
          <div>
            <h3>
              <span className="font-bold capitalize">1. Web development:</span> Is this for me?</h3>
          </div>
          <div className="checkMark">
            <div className="marked"></div>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 border-2 border-black">
          <div>
            <h3>
              <span className="font-bold capitalize">1. Web development:</span> Is this for me?</h3>
          </div>
          <div className="checkMark">
            <div className="unMarked"></div>
          </div>
        </div>

      </div>


    </section>
  )
}

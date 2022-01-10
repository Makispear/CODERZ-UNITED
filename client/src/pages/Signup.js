// import GhostButton from "../components/GhostButton"

export default function Signup() {
  return (
    <section className="bg-black w-full grid place-items-center h-screen">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl text-white font-bold uppercase">Sign up</h2>
        <form className="bg-tertiary flex flex-col p-3">
          <div className="flex flex-col p-2">
            <label htmlFor="firstName" className="font-bold text-xl uppercase">First Name</label>
            <input type="text" name="firstName" id="firstName" placeholder="ex: John" className="p-1" />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="lastName" className="font-bold text-xl uppercase" >Last Name</label>
            <input type="text" name="lastName" placeholder="ex: Smith" className="p-1" />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="" className="font-bold text-xl uppercase" >Email</label>
            <input type="email" className="p-1" />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="" className="font-bold text-xl uppercase" >Password</label>
            <input type="password" placeholder="●●●●●●●●" className="p-1" />
          </div>
          <div>
            {/* <GhostButton props={{ buttonName: "SIGN UP" }} /> */}
          </div>
          <div className="flex flex-col p-2 text-lg">
            <p>Already have an account? <a href="#" className="underline">Login</a> instead.</p>
          </div>
        </form>

      </div>
    </section>
  )
}

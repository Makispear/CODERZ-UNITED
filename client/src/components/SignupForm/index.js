import PrimaryButton from "../Buttons/tertiary/Primary";


export default function SignupForm() {
  return (
    <form className="bg-tertiary flex flex-col p-3">
      <div className="flex flex-col p-2">
        <label htmlFor="firstName" className="font-bold text-xl">First Name</label>
        <input type="text" name="firstName" id="firstName" placeholder="ex: John" className="p-1" />
      </div>
      <div className="flex flex-col p-2">
        <label htmlFor="lastName" className="font-bold text-xl" >Last Name</label>
        <input type="text" name="lastName" placeholder="ex: Smith" className="p-1" />
      </div>
      <div className="flex flex-col p-2">
        <label htmlFor="" className="font-bold text-xl" >Email</label>
        <input type="email" className="p-1" />
      </div>
      <div className="flex flex-col p-2">
        <label htmlFor="" className="font-bold text-xl" >Password</label>
        <input type="password" placeholder="●●●●●●●●" className="p-1" />
      </div>
      {/* <div className="p-2 font-semibold">
        <input type="checkbox" name="trainer-confirm" id="trainer-yes" className="mr-1" />
        <label for="trainer-yes">Remember me</label>
      </div> */}
      <div className="flex flex-col p-2">
        <PrimaryButton props={{ buttonName: "SIGN UP" }} />
      </div>
      <div className="flex flex-col p-2 text-white font-semibold">
        <p>Already United before? <a href="/login" className="underline">Login</a> instead.</p>
      </div>
    </form>
  )
} 

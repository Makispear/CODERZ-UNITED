import SignupForm from "../components/SignupForm"
import { BrandName } from "../utils/BrandName"

export default function Signup() {

  document.title = `Signup | ${BrandName}`
  return (
    <section className="bg-black w-full grid place-items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold">Sign up & unite</h1>
        <SignupForm />
      </div>
    </section>
  )
}

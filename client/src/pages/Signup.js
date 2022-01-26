// import PrimaryButton from "../components/Buttons/tertiary/Primary";
import SignupForm from "../components/SignupForm"

export default function Signup() {
  return (
    <section className="bg-black w-full grid place-items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-bold">Sign up & unite</h1>
        <SignupForm />
      </div>
    </section>
  )
}

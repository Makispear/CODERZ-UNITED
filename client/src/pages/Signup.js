// import PrimaryButton from "../components/Buttons/tertiary/Primary";
import SignupForm from "../components/SignupForm"

export default function Signup() {
  return (
    <section className="bg-white w-full grid place-items-center py-24">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-black font-bold">Sign up & unite</h1>
        <SignupForm />
      </div>
    </section>
  )
}

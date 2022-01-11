// import PrimaryButton from "../components/Buttons/tertiary/Primary";
import LoginForm from "../components/LoginForm"

export default function Login() {
  return (
    <section className="bg-white w-full grid place-items-center py-24">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl text-black font-bold">Login & unite again</h2>
        <LoginForm />
      </div>
    </section>
  )
}

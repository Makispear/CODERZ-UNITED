import LoginForm from "../components/LoginForm"

export default function Login() {
  return (
    <section className="bg-black w-full grid place-items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-bold">Login - unite again</h1>
        <LoginForm />
      </div>
    </section>
  )
}

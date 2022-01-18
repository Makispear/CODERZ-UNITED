import LoginForm from "../components/LoginForm"

export default function Login() {
  return (
    <section className="bg-white w-full grid place-items-center py-24">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-black font-bold">Login - unite again</h1>
        <LoginForm />
      </div>
    </section>
  )
}

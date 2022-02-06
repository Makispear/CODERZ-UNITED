import { goBack } from "./previousPage";

export default function NotFound() {
  return (
    <div className="p-3 sm:p-10 w-full flex flex-col items-center gap-5 text-center text-white">
      <h1>error 404: Page not found</h1>
      <h2>This page will be available in future updates!</h2>
      <button className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize" onClick={goBack}>back</button>
    </div>
  )
}

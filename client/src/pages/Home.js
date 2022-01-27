import Board from "../components/Board";
import Hero from "../components/Hero";
import Options from "../components/Options";
import Quotes from "../components/Quotes"

export default function Home() {
  document.title = "Coderz United | Learn Web Development & Design"

  return (
    <main>
      <Hero />
      <Options />
      <Board />
      <Quotes />
    </main>

  )
}


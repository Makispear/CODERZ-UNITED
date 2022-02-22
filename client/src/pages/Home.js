import Board from "../components/Board";
import Hero from "../components/Hero";
import Options from "../components/Options";
import Quotes from "../components/Quotes"
import { BrandName } from "../utils/BrandName";

export default function Home() {
  document.title = `${BrandName} | Learn Web Development & Design`

  return (
    <main>
      <Hero />
      <Options />
      <Board />
      <Quotes />
    </main>

  )
}


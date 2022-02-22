import PreModules from "../../../components/PreModules";
import { BrandName } from "../../../utils/BrandName";

export default function GettingStarted() {
  document.title = `Getting Started | ${BrandName}`

  return (
    <main>
      <PreModules />
    </main>
  )
}


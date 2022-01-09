import App from "../App";
import Button from "../components/Button"
import GhostButton from "../components/GhostButton"

export default function Home() {

  return (
    <div>
      <div>
        <Button props={{ buttonName: "GET STARTED" }} />
        <GhostButton props={{ buttonName: "LEARN MORE" }} />
      </div>
      <div>
        Helooooooooooo
      </div>
    </div>
  )
}


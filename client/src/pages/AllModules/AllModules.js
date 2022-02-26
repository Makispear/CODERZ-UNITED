import AllModules from "../../components/AllModules";
import WelcomeUser from "../../components/WelcomeUser"

export default function Modules() {

  const lessonsArr = [
    {
      lessonName: 'FAQ',
      isCompleted: false,
      isLocked: false,
      section: 'Intro To Web Development',
      module: "Getting Started"
    },
    {
      lessonName: 'Install VS Code',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      module: "Getting Started"
    },
    {
      lessonName: 'Sign up to GitHub',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      module: "Getting Started"
    },
    {
      lessonName: 'Install Google Chrome',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      module: "Getting Started"
    },
    {
      lessonName: 'Install Git',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      module: "Getting Started"
    },

  ]

  return (
    <main>
      <WelcomeUser />
      <AllModules props={lessonsArr} />
    </main>
  )
}


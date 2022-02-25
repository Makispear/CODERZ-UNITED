import PreModules from "../../../components/PreModules";
import { BrandName } from "../../../utils/BrandName";

export default function GettingStarted() {
  document.title = `Getting Started | ${BrandName}`

  const lessonsArr = [
    {
      lessonName: 'FAQ',
      isCompleted: false,
      isLocked: false,
      section: 'Intro To Web Development'
    },
    {
      lessonName: 'Install VS Code',
      isCompleted: false,
      isLocked: true,
      section: 'Installations'
    },
    {
      lessonName: 'Sign up to GitHub',
      isCompleted: false,
      isLocked: true,
      section: 'Installations'
    },
    {
      lessonName: 'Install Google Chrome',
      isCompleted: false,
      isLocked: true,
      section: 'Installations'
    },
    {
      lessonName: 'Install Git',
      isCompleted: false,
      isLocked: true,
      section: 'Installations'
    }
  ]

  return (
    <main>
      <PreModules props={lessonsArr} />
    </main>
  )
}


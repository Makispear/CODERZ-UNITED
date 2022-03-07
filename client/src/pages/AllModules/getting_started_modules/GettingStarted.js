import PreModules from "../../../components/PreModules";
import { BrandName } from "../../../utils/BrandName";

export default function GettingStarted() {
  document.title = `Getting Started | ${BrandName}`

  const lessonsArr = [
    {
      lessonName: 'FAQ',
      isCompleted: false,
      isLocked: false,
      section: 'Intro To Web Development',
      nextPage: 'Install VS Code',
      previousPage: "back to lessons"
    },
    {
      lessonName: 'Install VS Code',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: 'Sign up to GitHub',
      previousPage: 'FAQ'
    },
    {
      lessonName: 'Sign up to GitHub',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: 'Install Google Chrome',
      previousPage: 'Install VS Code'
    },
    {
      lessonName: 'Install Google Chrome',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: 'Install Git',
      previousPage: 'Sign up to GitHub'
    },
    {
      lessonName: 'Install Git',
      isCompleted: false,
      isLocked: true,
      section: 'Installations',
      nextPage: "",
      previousPage: 'Install Google Chrome'
    }
  ]

  return (
    <main>
      <PreModules props={lessonsArr} />
    </main>
  )
}


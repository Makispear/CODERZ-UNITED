import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import BreadCrumb from "../../../../components/BreadCrumb"
import InfoMessage from "../../../../components/InfoMessage"
import PageTracker from "../../../../components/PageTracker"
import { MARK_COMPLETED_LESSON } from "../../../../utils/mutations"
import { GET_COMPLETED_LESSONS } from "../../../../utils/queries"
import extensionSearchBarPic from "../../../../assets/images/extension_search.png"
import viewBar from "../../../../assets/images/vscode_view_tab.png"
import Reference from "../../../../utils/Reference"

export default function VSCode() {
  const Lesson_title = "Install VS Code"
  const Lesson_Number = '1.2.1'
  const { data } = useQuery(GET_COMPLETED_LESSONS)
  const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
  document.title = `Install VS Code | Getting Started | Lesson ${Lesson_Number}`
  let showMarkCompleteButton = false
  let showButton = false

  const myData = data?.getCompletedLessons.completedLessons || null

  const completeLesson = () => {
    try {
      markComplete({
        variables: {
          lessonName: Lesson_title.trim(),
          lessonNumber: Lesson_Number.trim()
        }
      }).then((result) => {
        if (result) {
          window.location.href = "/all_modules/getting_started/installations/github/";
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  if (error) {
    alert(error.message)
  }

  if (myData) {
    let isFound = false;

    for (let i = 0; i < myData.length; i++) {
      if (myData[i].lessonName === Lesson_title) {
        isFound = true
        break
      }
    }

    if (isFound) {
      showButton = true;
      showMarkCompleteButton = false
    } else {
      showButton = true;
      showMarkCompleteButton = true
    }

  }


  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleImage = (img) => {
    setIsModalOpen(!isModalOpen)
  }



  return (
    <section className="style-module-section highlight">

      <div className="w-full flex justify-center font-bold p-10 text-center capitalize bg-blackGradient bg-no-repeat bg-cover bg-center">
        <h1>Installations</h1>
      </div>
      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'darkGray' }} />
        </div>
        <h2>
          {Lesson_title} <PageTracker props={{ page: Lesson_Number }} />
        </h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>
          As web developers, Coding is the bread and butter of our work. Therefore it's a good idea to have the best coding tools. We can write our code anywhere; a word document, a text file, or even a notepad. A better alternative is using a code editor. A code editor is a text editor used for writing code. Code editors have many features like color-coding to help us visualize our code better and offer us many extensions to help us be efficient. We will look into the features code editors provide us later in the course.
        </p>
        <p>
          Let's download Visual Studio Code (also known as VS Code). VS Code is a
          code editor owned by Microsoft and is one of the best if not the best Code Editor web developers use. It's also free and has a ton of great features. Let's go ahead and download it now. Here is the link to the <a className="link" target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/download">download VS Code</a>. After installing, launch VS Code and you should see VS Code's <Reference props={{ word: "UI", ref: "User Interface" }} />.
        </p>
        <div className={`flex justify-center primary-radius cursor-pointer`}>
          <img
            src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/getstarted_page.png"
            alt="VS Code Interface from Microsoft's website"
            className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
            onClick={() => toggleImage()}
          />
        </div>

        <p>
          VS Code offers a lot of extensions you can download that enhance your coding experience. We recommend you take some time to customize your version of VS Code to give your work some taste.
        </p>

        <p>
          To open the extension section of VS Code, hover over the <span className="keyboard-key">View</span> link on the menu bar and select <span className="keyboard-key">Extensions</span>.
        </p>
        <div className={`flex justify-center primary-radius cursor-pointer`}>
          <img
            src={viewBar}
            alt="Extension search bar in VS Code"
            className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
            onClick={() => toggleImage()}
          />
        </div>

        <p>
          Or you can press <span className="keyboard-key">Ctrl + Shift + x</span> in Windows or <span className="keyboard-key">Command + Option + x</span> in Mac. A search bar will appear on the top left corner of VS Code:
        </p>

        <div className={`flex justify-center primary-radius cursor-pointer`}>
          <img
            src={extensionSearchBarPic}
            alt="Extension search bar in VS Code"
            className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
            onClick={() => toggleImage()}
          />
        </div>

        <p className="font-bold">
          Here are some extensions you can look for in the extensions marketplace in VS Code:
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          1. Bracket Pair Colinizer 2
        </h2>
        <p className="w-full text-darkGray">
          It helps visualize which opening bracket belongs to which.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          2. Code Spell Checker
        </h2>
        <p className="w-full text-darkGray">
          warns you when you have spelled incorrectly. this extension can be helpful for checking typos on your paragraphs or headings. In fact this paragraph was written and checked by this exact extension.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          3. Palocode-2020
        </h2>
        <p className="w-full text-darkGray">
          A good way to capture code snippets. Very helpful when trying to share a piece of code when asking for help. Also used when sharing code on social media platforms.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          4. Better Comments
        </h2>
        <p className="w-full text-darkGray">
          Highlights your TODO comments and more.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          5. Auto Rename Tag
        </h2>
        <p className="w-full text-darkGray">
          Saves you the hustle of finding the closing tag you need to change after changing the opening tag.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          6. :emojisense:
        </h2>
        <p className="w-full text-darkGray">
          Easy way to add emojis without leaving your code editor.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          7. DotENV
        </h2>
        <p className="w-full text-darkGray">
          Adds color coding to your <span className="new-word">.env</span> (environment) file
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <InfoMessage
          props={{
            name: "Fun Fact",
            note: "These extensions are made by developers and you can make your own too! We will see these extensions in action when we start coding soon."
          }}
        />
      </div>

      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">


        <NavLink to="/all_modules/getting_started/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>

        {showMarkCompleteButton && showButton &&
          <div className='flex'>
            <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider" onClick={completeLesson}>Complete &amp; next </button>
          </div>
        }
        {!showMarkCompleteButton && showButton &&
          <NavLink to="/all_modules/getting_started/installations/github/" className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">next &gt;&gt;</NavLink>
        }

      </div>

    </section >
  )
}

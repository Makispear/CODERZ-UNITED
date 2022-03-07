import BreadCrumb from "../../../../components/BreadCrumb"
import InfoMessage from "../../../../components/InfoMessage"
import PageTracker from "../../../../components/PageTracker"
import extensionSearchBarPic from "../../../../assets/images/extension_search.png"
import viewBar from "../../../../assets/images/vscode_view_tab.png"
import Reference from "../../../../utils/Reference"
import BackAndNextButtons from "../../../../components/NextAndBackButtons"
import { toggleImage } from "../../../../utils/toggleImage"

export default function VSCode() {

  const lessonInfo = {
    Lesson_title: "Install VS Code",
    Lesson_Number: '1.2.1',
    nextLink: "/all_modules/getting_started/installations/github/",
    backLink: "/all_modules/getting_started/",
    nextPage: 'Sign up to GitHub 1.2.2',
    previousPage: 'All Lessons'
  }

  document.title = `${lessonInfo.Lesson_title} | Getting Started | Lesson ${lessonInfo.Lesson_Number}`




  return (
    <section className="style-module-section">

      <div className="w-full flex justify-center font-bold p-10 text-center capitalize bg-blackGradient bg-no-repeat bg-cover bg-center">
        <h1>Installations</h1>
      </div>
      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
          <BreadCrumb props={{ color: 'darkGray' }} />
        </div>
        <h2>
          {lessonInfo.Lesson_title} <PageTracker props={{ page: lessonInfo.Lesson_Number }} />
        </h2>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>
          As web developers, Coding is the essence of our work. Thus it's best to have the best coding tools. We can write our code anywhere; a word document, a text file, or even a notepad. A better choice is using a code editor. A code editor is a text editor used for writing code. Code editors have many features like color-coding to assist us in visualizing our code and offer us many extensions to help us with efficiency. We will look into the features it provides us with later in the course.
        </p>
        <p>
          Let's download Visual Studio Code (also known as VS Code). VS Code is a code editor owned by Microsoft and is one of the best if not the best Code Editor web developers use. It's also free and has a ton of great features. Let's go ahead and download it now. Here is the link to <a className="link" target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/download">download VS Code</a>. After installing, launch VS Code and you should see VS Code's <Reference props={{ word: "UI", ref: "User Interface" }} />..
        </p>
        <div className={`flex justify-center primary-radius`}>
          <img
            src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/getstarted_page.png"
            alt="VS Code Interface from Microsoft's website"
            className={`cursor-pointer p-2 image-toggled-off`}
            onClick={e => toggleImage(e)}
          />
        </div>

        <p>
          VS Code offers a lot of extensions you can download that enhance your coding experience. We recommend you take some time to tailor your version of VS Code to your preference.
        </p>

        <p>
          To open the extension section of VS Code, hover over the <span className="keyboard-key">View</span> link on the menu bar and select <span className="keyboard-key">Extensions</span>.
        </p>
        <div className={`flex justify-center primary-radius`}>
          <img
            src={viewBar}
            alt="Open Extension option shown on menu bar"
            className={`cursor-pointer p-2 image-toggled-off`}
            onClick={e => toggleImage(e)}
          />
        </div>

        <p>
          Or you can press <span className="keyboard-key">Ctrl + Shift + x</span> in Windows or <span className="keyboard-key">Command + Option + x</span> in Mac. A search bar will appear on the top left corner of VS Code:
        </p>

        <div className={`flex justify-center primary-radius`}>
          <img
            src={extensionSearchBarPic}
            alt="The extension search bar in VS Code"
            className={`cursor-pointer p-2 image-toggled-off`}
            onClick={e => toggleImage(e)}
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
        <p className="w-full">
          It helps visualize which opening bracket belongs to which.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          2. Grammarly (unofficial)

        </h2>
        <p className="w-full">
          Warns you when you have spelling errors. This extension can help check typos in your paragraphs or headings.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          3. Palocode-2020
        </h2>
        <p className="w-full">
          A good way to capture code snippets. Very helpful when trying to share a piece of code when asking for help. Also used when sharing <Reference props={{ word: "code snippets", ref: "Code blocks / pieces of code" }} /> on social media platforms.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          4. Better Comments
        </h2>
        <p className="w-full">
          Highlights your TODO <Reference props={{ word: "comments", ref: "Code comments. Stay tuned" }} /> and more.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          5. Auto Rename Tag
        </h2>
        <p className="w-full">
          Saves you the hustle of finding the <Reference props={{ word: "closing tag", ref: "HTML element. Will explain in later lessons" }} /> you need to change after changing the opening tag and vice versa.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          6. :emojisense:
        </h2>
        <p className="w-full">
          Easy way to add emojis without leaving your code editor.
        </p>

      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>
          There are plenty more. But for now, these are some suggestions to get you going.
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

      <BackAndNextButtons props={lessonInfo} />

    </section >
  )
}

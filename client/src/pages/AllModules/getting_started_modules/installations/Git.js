import PageTracker from "../../../../components/PageTracker"
import BreadCrumb from "../../../../components/BreadCrumb"
import Reference from "../../../../utils/Reference"
import gitBashInterface from "../../../../assets/images/gitbash_interface.png"
import BackAndNextButtons from "../../../../components/NextAndBackButtons"
import InfoMessage from "../../../../components/InfoMessage"
import { toggleImage } from "../../../../utils/toggleImage"

export default function Git() {

  const lessonInfo = {
    Lesson_title: "Install Git",
    Lesson_Number: '1.2.4',
    nextLink: "/all_modules/getting_started/",
    backLink: "/all_modules/getting_started/installations/chrome/",
    nextPage: "Finish",
    previousPage: 'Install Google Chrome 1.2.3'
  }

  document.title = `${lessonInfo.Lesson_title} | Getting Started | Lesson ${lessonInfo.Lesson_Number}`


  return (
    <section className="style-module-section">

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
          To start working with Git, we need a terminal. If you are using macOS, you should have a terminal already. With Windows, we'll need to download Git Bash. Git, as stated on the Git website, <q>is a free and open-source distributed version control system designed to handle everything from small to large projects with speed and efficiency.</q>
        </p>

        <p>
          Git helps us control our codebase versions. Git comes in handy if you ever break your code. Then you can roll back to the older version of the code and start over. Sometimes when the code breaks, it's easier to find where it happened when you can look at different versions of that code. We'll look more into Git after <Reference props={{ word: "this", ref: "Getting Started Module" }} /> module.
        </p>

        <p>
          Here is the link to <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/downloads" className="link">download GitBash</a>.</p>
        <p>
          After installation is complete, launch git bash. It should look like the following picture with your Username on the title bar and your username and device name on the command line.
        </p>
      </div>

      <div className={`flex justify-center primary-radius cursor-pointer`}>
        <img
          src={gitBashInterface}
          alt="GitBash's User Interface"
          className={`cursor-pointer p-2 image-toggled-off`}
          onClick={e => toggleImage(e)}
        />
      </div>
      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <InfoMessage props={{ name: "Note", note: "The picture might look slightly different depending on the version you downloaded. To check which version of Git Bash you have, type in 'git --version' and press 'Enter'. This picture is for git version 2.35.1.windows.2" }} />
      </div>




      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <hr></hr>

        <h2>
          Set up Git Configurations
        </h2>
        <p>Before moving on, you'll need to set up GitBash. This is because every <Reference props={{ word: "command", ref: "Code that tells Git what to do" }} /> you type will be linked to your information. To do this, you need to provide GitBash with your name and email. To do this type in the following commands in GitBash:
        </p>
        <p>
          <span className="git-dollar-sign">$</span><span className="code">git config --global user.name "<span className="keyboard-key custom-info">First &amp; last name here</span>"</span> then press <span className="keyboard-key">Enter</span>.
        </p>


        <p>
          <span className="git-dollar-sign">$</span><span className="code">git config --global user.email <span className="keyboard-key custom-info">your email here</span></span> then press <span className="keyboard-key">Enter</span>. If you don't get an error message, you got it right. If you get an error, that means you probably did something wrong. Make sure to type the command exactly how it is, without the dollar sign. Copying and pasting might help.
        </p>

        <p>To check if you did it correctly, open the config setting by typing in


          <span className="git-dollar-sign">$</span><span className="code">git config --list</span> and look for the line with <span className="keyboard-key">user.name</span> and <span className="keyboard-key">user.email</span>. They should be equal to what your input was. To escape the list press <span className="keyboard-key">Q</span>.
        </p>

        <InfoMessage props={{ name: "Info", note: "Quotation marks are required if you are typing more than one word. That's why the command for email doesn't have quotations." }} />
        <p>
          - If you find trouble setting GitBash up, or want to learn more, refer to the <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank" rel="noopener noreferrer" className="link">setup page</a> in the Git website.
        </p>

        <p>
          - To customize Git's UI to your liking, right click on the <span className="keyboard-key">title bar</span> and click <span className="keyboard-key">Options<span className="font-bold">...</span></span>. It will provide you with a bunch of settings such as background color and fonts.
        </p>

        <p>
          You can close your <Reference props={{ word: "terminal", ref: "GitBash" }} /> after you're done.
        </p>
      </div>

      <BackAndNextButtons props={lessonInfo} />

    </section >
  )
}

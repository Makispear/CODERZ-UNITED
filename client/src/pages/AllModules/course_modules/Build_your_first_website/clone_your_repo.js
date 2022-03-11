import BreadCrumb from '../../../../components/BreadCrumb'
import PageTracker from '../../../../components/PageTracker'
import BackAndNextButtons from '../../../../components/NextAndBackButtons'
import NewRepoButton from "../../../../assets/images/github_new_repo_button.png"
import newRepoForm from "../../../../assets/images/new_repo_form.png"
import InfoMessage from '../../../../components/InfoMessage'
import createdRepo from "../../../../assets/images/created_repo.png"
import Reference from '../../../../utils/Reference'
import { toggleImage } from '../../../../utils/toggleImage'

export default function CloneYourRepo() {

    const lessonInfo = {
        Lesson_title: "Clone your Repo",
        Lesson_Number: "2.1.2",
        nextLink: "/all_modules/course_modules/",
        backLink: "/all_modules/course_modules/create_repo/",
        nextPage: undefined,
        previousPage: 'Create your first Repo'
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
                    Now that you have your project on remote, you need to make it available on your local computer. Before you do that, you'll need to get familiar with using your terminal and know a couple of git commands. Let's do that now.
                </p>

                <p>
                    With your terminal, you can navigate through and create files and folders. Let's try navigating to your desktop. On your command line, type in the following command:

                </p>
                <p>
                    <span className="git-dollar-sign">$</span><span className="code">ls</span> then press <span className="keyboard-key">Enter</span>.
                </p>
                <p>
                    <span className='keyboard-key'>ls</span> stands for List. This command lists all the <Reference props={{ word: "directories", ref: "folders" }} /> and files in the current directory you're on.
                </p>
                <p>
                    To check which directory you're in, type in the terminal
                </p>
                <p>
                    <span className="git-dollar-sign">$</span><span className="code">pwd</span> then press <span className="keyboard-key">Enter</span>.
                </p>
                <p>
                    Take a look. Do you see <span className='keyboard-key'>Desktop/</span> in there?
                    Navigate into the <span className='keyboard-key'>Desktop/</span> folder with the following command:
                </p>
                <p>
                    <span className="git-dollar-sign">$</span><span className="code">cd Desktop</span> then press <span className="keyboard-key">Enter</span>.
                </p>

            </div>






            <BackAndNextButtons props={lessonInfo} />

        </section>
    )
}

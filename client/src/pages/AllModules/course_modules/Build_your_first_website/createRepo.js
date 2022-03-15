import BreadCrumb from '../../../../components/BreadCrumb'
import PageTracker from '../../../../components/PageTracker'
import BackAndNextButtons from '../../../../components/NextAndBackButtons'
import NewRepoButton from "../../../../assets/images/github_new_repo_button.png"
import newRepoForm from "../../../../assets/images/new_repo_form.png"
import InfoMessage from '../../../../components/InfoMessage'
import createdRepo from "../../../../assets/images/created_repo.png"
import Reference from '../../../../utils/Reference'
import { toggleImage } from '../../../../utils/toggleImage'

export default function CreateRepo() {

    const lessonInfo = {
        Lesson_title: "Create your first Repo",
        Lesson_Number: "2.1.1",
        nextLink: "/all_modules/course_modules/clone_your_repo/",
        backLink: "/all_modules/course_modules/",
        nextPage: "Clone your Repo",
        previousPage: 'All Lessons'
    }

    document.title = `${lessonInfo.Lesson_title} | Getting Started | Lesson ${lessonInfo.Lesson_Number}`



    return (
        <section className="style-module-section">


            <div className="w-full flex justify-center font-bold p-10 text-center capitalize bg-blackGradient bg-no-repeat bg-cover bg-center">
                <h1>Build your First Website</h1>
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
                <p>Let's create our first project. To start a project, You need to create a  <Reference props={{ word: "repo", ref: "Repository" }} />. A repo contains all your projects files. To make a repo, log in to GitHub, and on the homepage, press the green <span className='keyboard-key'>New</span> button on the left corner.</p>

                <div className={`flex justify-center primary-radius w-auto`}>
                    <img
                        src={NewRepoButton}
                        alt="Showing where green button is located in the GitHub homepage"
                        className={`cursor-pointer border border-gray-200 primary-radius image-toggled-off`}
                        onClick={e => toggleImage(e)}
                    />
                </div>

                <p>Fill in the <span className='keyboard-key'>Repository name</span> and make the repo public. You're also going to <span className='keyboard-key'>add a README file</span>, so make sure you tick that as well.</p>

                <div className={`flex justify-center primary-radius w-auto`}>
                    <img
                        src={newRepoForm}
                        alt="Form to fill to create repository"
                        className={`cursor-pointer border border-gray-200 primary-radius image-toggled-off`}
                        onClick={e => toggleImage(e)}
                    />
                </div>

                <InfoMessage props={{ name: "Info", note: "A README file is what developers read to understand more about the project. Think of it as a documentary for your project. That's why it's called 'READ ME!'" }} />

                <div className={`flex justify-center primary-radius w-auto`}>
                    <img
                        src={createdRepo}
                        alt="Repo after being created Interface"
                        className={`cursor-pointer border border-gray-200 primary-radius image-toggled-off`}
                        onClick={e => toggleImage(e)}
                    />
                </div>
                <hr></hr>


                <p><span className='font-bold'>Congratulations</span> on creating your very first GitHub repo. Now that you have a place to store your code, you can start your first project.</p>

                <p>Your project is now stored remotely in GitHub. Remote is where the project is initially stored. The next step is to <Reference props={{ word: "pull", ref: "Download" }} /> your project from <Reference props={{ word: "remote", ref: "GitHub" }} />.</p>

                <InfoMessage props={{ name: "Info", note: 'Do you remember what developers use instead of "download from " and "upload to" Github? "Pull from" and "push to". Knowing this will help you understand git commands better later on.' }} />

            </div>






            <BackAndNextButtons props={lessonInfo} />

        </section>
    )
}

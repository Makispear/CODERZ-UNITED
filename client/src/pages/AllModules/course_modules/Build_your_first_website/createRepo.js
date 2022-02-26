import BreadCrumb from '../../../../components/BreadCrumb'
import PageTracker from '../../../../components/PageTracker'
import BackAndNextButtons from '../../../../components/NextAndBackButtons'
import { useState } from 'react'
import NewRepoButton from "../../../../assets/images/github_new_repo_button.png"
import newRepoForm from "../../../../assets/images/new_repo_form.png"
import InfoMessage from '../../../../components/InfoMessage'
import createdRepo from "../../../../assets/images/created_repo.png"
import Reference from '../../../../utils/Reference'

export default function CreateRepo() {

    const lessonInfo = {
        Lesson_title: "Create your first Repo",
        Lesson_Number: "2.1.1",
        nextLink: "/all_modules/course_modules/",
        backLink: "/all_modules/course_modules/",
    }

    document.title = `${lessonInfo.Lesson_title} | Getting Started | Lesson ${lessonInfo.Lesson_Number}`

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleImage = (img) => {
        setIsModalOpen(!isModalOpen)
    }

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


            {/* <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
                <p></p>
            </div> */}

            <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
                <p>Lets make our first project. To start a project we need to create a repo. A repo contains all your projects files. To make a repo, login to github and press the Green button on the left corner that says <span className='keyboard-key'>New</span>.</p>

                <div className={`flex justify-center primary-radius cursor-pointer`}>
                    <img
                        src={NewRepoButton}
                        alt="VS Code Interface from Microsoft's website"
                        className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
                        onClick={() => toggleImage()}
                    />
                </div>

                <p>This will direct us to fill in the form to create the repo. Fill in the <span className='keyboard-key'>Repository name</span> and tick the Public option to make the repo public. We're also going to <span className='keyboard-key'>Add a README file</span> so make sure you tick that as well.</p>

                <div className={`flex justify-center primary-radius cursor-pointer`}>
                    <img
                        src={newRepoForm}
                        alt="VS Code Interface from Microsoft's website"
                        className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
                        onClick={() => toggleImage()}
                    />
                </div>

                <InfoMessage props={{ name: "Info", note: "A README file is a file that developers read to understand more about the project. Think of it as a documentary for your project. That's why it's called 'READ ME!" }} />

                <div className={`flex justify-center primary-radius cursor-pointer`}>
                    <img
                        src={createdRepo}
                        alt="VS Code Interface from Microsoft's website"
                        className={`cursor-pointer p-2 border border-black ${isModalOpen ? "full-screen-img" : "w-300"}`}
                        onClick={() => toggleImage()}
                    />
                </div>

                <p><span className='font-bold'>Congratulations</span> on creating your very first GitHub <Reference props={{ word: "repo", ref: "Repository" }} />. Now that we have a place to store our code, you can start building your first project.</p>

                <p>Our project is now stored remotely in GitHub. Remote is the place where the project was originally stored. The next step is to <Reference props={{ word: "pull", ref: "Download" }} /> our project from <Reference props={{ word: "remote", ref: "GitHub" }} /></p>

                <InfoMessage props={{ name: "Info", note: 'Do you remember what we say instead of "download from " and "upload to" github? Pull and Push.' }} />

            </div>






            <BackAndNextButtons props={lessonInfo} />

        </section>
    )
}

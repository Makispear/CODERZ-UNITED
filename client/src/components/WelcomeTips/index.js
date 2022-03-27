import lessonNumberPic from "../../assets/images/lesson_number.png"
import breadCrumbsPic from "../../assets/images/breadcrumb.png"
import refPic from "../../assets/images/ref.png"
import refHoverPic from "../../assets/images/ref_hover.png"
import { useMutation } from "@apollo/client"
import { COMPLETE_TUTORIAL_TIP } from "../../utils/mutations"





export default function WelcomeTip({ props }) {
    const { tutorialCompleted, firstName } = props?.getTutorialTipStatus

    const tipPageHandler = e => {
        let welcomeTip = document.querySelector('[data-tip="welcome"]')
        let lessonNumberTip = document.querySelector('[data-tip="lessonNumber"]')
        let breadcrumbTip = document.querySelector('[data-tip="breadcrumb"]')
        let explainerTip = document.querySelector('[data-tip="explainer"]')

        // the start button 
        if (e.target.classList.contains('startButton')) {
            welcomeTip.classList.add('none')
            lessonNumberTip.classList.remove('none')


            // next button --- lesson number 
        } else if (e.target.classList.contains('lessonNumberNextButton')) {
            lessonNumberTip.classList.add('none')
            breadcrumbTip.classList.remove('none')


            // back button --- lesson number 
        } else if (e.target.classList.contains('backButton-lessonNumber')) {
            lessonNumberTip.classList.add('none')
            welcomeTip.classList.remove('none')


            // back button --- breadcrumbs 
        } else if (e.target.classList.contains('backButton-breadcrumbs')) {
            breadcrumbTip.classList.add('none')
            lessonNumberTip.classList.remove('none')


            // next button --- breadcrumbs 
        } else if (e.target.classList.contains('breadcrumbsNextButton')) {
            breadcrumbTip.classList.add('none')
            explainerTip.classList.remove('none')


            // back button --- explainer
        } else if (e.target.classList.contains('backButton-explainer')) {
            explainerTip.classList.add('none')
            breadcrumbTip.classList.remove('none')
        }


    }

    const [markTipComplete] = useMutation(COMPLETE_TUTORIAL_TIP)

    const removeTip = () => {
        document.querySelector('.remove').classList.add('none')
        window.location.reload()
    }

    const CompleteTutorialTip = () => {

        try {
            markTipComplete({
                variables: {
                    tutorialCompleted: true
                }
            })
        } catch (error) {
            alert(error)
        }

        removeTip()
    }

    return (
        <div div className="background-blur fixed w-screen h-screen z-50 top-0 remove">

            {/* WELCOMING SECTION  */}
            <div data-tip="welcome" className="text-white single-tip p-2 grid place-content-center text-center primary-radius shadow-md shadow-gray-800">
                <div className="w-full flex justify-end">
                    {tutorialCompleted &&
                        <button className="flex justify-end bg-white text-black primary-radius px-3" onClick={removeTip}>
                            Close
                        </button>
                    }
                </div>
                <h2 className="font-bold">
                    Hi {firstName}, Welcome to your first Lesson!
                </h2>
                <h3>
                    We are glad to have you on our web development Course!
                </h3>
                <p className="text-6xl">
                    🎉🎉🎉
                </p>
                <p className="mt-10 text-black">
                    Here are 3 tips to help you navigate through the lessons.
                </p>

                <div className="w-auto flex justify-center mt-10">
                    <button className="startButton mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={e => tipPageHandler(e)}>
                        Start
                    </button>
                </div>
            </div>


            {/* LESSON NUMBER */}
            <div data-tip="lessonNumber" className="none w-full text-white single-tip p-2 grid place-content-center text-center primary-radius shadow-md shadow-gray-800 justify-baseline">
                {tutorialCompleted &&
                    <div className="w-full flex justify-end">
                        <button className="flex justify-end bg-white text-black primary-radius px-3" onClick={removeTip}>
                            Close
                        </button>
                    </div>
                }
                <div className="flex flex-col items-center">
                    <h2 className="font-bold">
                        Lesson number
                    </h2>
                    <p>
                        Each lesson has a unique lesson number to help you reference that lesson
                    </p>
                    <div className="relative primary-radius w-250">
                        <img
                            src={lessonNumberPic}
                            alt="path to current working directory. This is what you get after typing in pwd"
                        />
                    </div>
                </div>

                <div className="w-auto flex justify-between gap-3 mt-10">
                    <button className="backButton-lessonNumber mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={e => tipPageHandler(e)}>
                        Back
                    </button>
                    <button className="lessonNumberNextButton mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={e => tipPageHandler(e)}>
                        Next
                    </button>

                </div>
            </div>


            {/* Bread Crumbs */}
            <div data-tip="breadcrumb" className="none w-full text-white single-tip p-2 grid place-content-center text-center primary-radius shadow-md shadow-gray-800 justify-baseline">
                {tutorialCompleted &&
                    <div className="w-full flex justify-end">
                        <button className="flex justify-end bg-white text-black primary-radius px-3" onClick={removeTip}>
                            Close
                        </button>
                    </div>
                }
                <div className="flex flex-col items-center">
                    <h2 className="font-bold">
                        Bread Crumbs
                    </h2>
                    <p>
                        Bread Crumbs help you understand we're you are in the website and how you got there.
                    </p>
                    <div className="relative primary-radius w-250">
                        <img
                            src={breadCrumbsPic}
                            alt="path to current working directory. This is what you get after typing in pwd"
                        />
                    </div>
                </div>

                <div className="w-auto flex justify-between gap-3 mt-10">
                    <button className="backButton-breadcrumbs mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={e => tipPageHandler(e)}>
                        Back
                    </button>
                    <button className="breadcrumbsNextButton mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={e => tipPageHandler(e)}>
                        Next
                    </button>

                </div>
            </div>

            {/* Explainer  */}
            <div data-tip="explainer" className="none w-full text-white single-tip p-2 grid place-content-center text-center primary-radius shadow-md shadow-gray-800 justify-baseline">
                {tutorialCompleted &&
                    <div className="w-full flex justify-end">
                        <button className="flex justify-end bg-white text-black primary-radius px-3" onClick={removeTip}>
                            Close
                        </button>
                    </div>
                }
                <div className="flex flex-col items-center">
                    <h2 className="font-bold">
                        Word Explainer (i.e)s
                    </h2>
                    <p>
                        If you see a word or sentence that has a dotted underline, hover over it to get more information about that text
                    </p>
                    <div className="relative flex flex-wrap gap-3 primary-radius w-250">
                        <img
                            src={refPic}
                            alt="path to current working directory. This is what you get after typing in pwd"
                        />
                        <img
                            src={refHoverPic}
                            alt="path to current working directory. This is what you get after typing in pwd"
                        />
                    </div>

                </div>

                <div className="w-auto flex justify-between gap-3 mt-10">
                    <button className="backButton-explainer mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={e => tipPageHandler(e)}>
                        Back
                    </button>
                    <button className="lessonNumberNextButton mb-5 mx-5 px-3 bg-transparent border-2 border-white hover:bg-white hover:text-tertiary primary-radius cursor-pointer" onClick={CompleteTutorialTip}>
                        Finish
                    </button>

                </div>
            </div>
        </div>
    )
} 
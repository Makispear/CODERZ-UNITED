import { NavLink } from "react-router-dom";
import CheckMark from "../CheckMark";
import BreadCrumb from "../BreadCrumb";
import { menuExpander } from "../../utils/menuExpander";
import { useQuery } from "@apollo/client";
import { GET_COMPLETED_LESSONS } from "../../utils/queries";
import { markComplete } from "../../utils/markComplete";

export default function CourseMaterial() {
    const { data } = useQuery(GET_COMPLETED_LESSONS)
    const myData = data?.getCompletedLessons.completedLessons || null

    const lessonsArr = [
        {
            lessonName: 'Create your first Repo',
            isCompleted: false,
            isLocked: false
        },
    ]

    markComplete(myData, lessonsArr)
    console.table(myData)
    console.table(lessonsArr)


    return (
        <section className="style-page-section">
            <div className="w-full flex lg:w-900 justify-start mt-10 text-secondary">
                <BreadCrumb props={{ color: 'secondary' }} />
            </div>
            <div className="flex flex-col items-center">
                <h1>
                    Course Material
                </h1>
                <p className="w-full sm:w-600 text-secondary text-center md:w-700 lg:w-900 bg-black gap-4">
                    Lets Start Coding
                </p>
            </div>

            <div className="w-full flex lg:w-900 justify-end mt-10 text-secondary">
                <p>({lessonsArr.filter(lesson => lesson.isCompleted).length}/{lessonsArr.length}) completed</p>
            </div>

            {/* Modules  */}
            <div className="w-full flex sm:w-600 md:w-700 lg:w-900 flex-col bg-black text-black">
                {/* Build your portfolio  */}
                <div className="flex flex-col cursor-pointer select-none mt-5" onClick={() => menuExpander(".createRepo-lessons", ".createRepo-lessons-expander")}>
                    <div>
                        <div>
                            <div className="flex justify-between items-center py-5 px-2 primary-radius border-x-2 bg-secondary hover:bg-white">
                                <div>
                                    <button className="font-bold capitalize">
                                        <span className="createRepo-lessons-expander">➤</span> Build Your first Website
                                    </button>
                                </div>
                                {lessonsArr[0].isCompleted ? <CheckMark props={{ marked: true }} /> : <CheckMark props={{ marked: false }} />}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="createRepo-lessons hidden border-t-2 border-black mb-10 pl-1">
                    <NavLink to={"/all_modules/course_modules/create_repo/"} className="flex justify-start py-3 pl-10 primary-radius bg-secondary text-black hover:bg-white">
                        <div className="mr-1 scale-75 brightness-100">
                            <CheckMark props={{ marked: lessonsArr[0].isCompleted }} />
                        </div>
                        {lessonsArr[0].lessonName}
                    </NavLink>
                </div>

                <div className="flex justify-between w-full items my-10">
                    <NavLink to="/all_modules/" className="bg-transparent text-secondary button-style border border-tertiary hover:border-secondary font-light capitalize">&lt;&lt; Back</NavLink>
                </div>

            </div>


        </section >
    )
}

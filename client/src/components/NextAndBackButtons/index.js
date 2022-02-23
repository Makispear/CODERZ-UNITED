import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MARK_COMPLETED_LESSON } from '../../utils/mutations'
import { GET_COMPLETED_LESSONS } from '../../utils/queries'

export default function BackAndNextButtons({ props }) {
    const { backLink, nextLink, Lesson_Number, Lesson_title } = props
    const { data } = useQuery(GET_COMPLETED_LESSONS)
    const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
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
                    window.location.href = nextLink;
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

    return (
        <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">

            <NavLink to={backLink} className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>

            {showMarkCompleteButton && showButton &&
                <div className='flex'>
                    <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider" onClick={completeLesson}>Complete &amp; next </button>
                </div>
            }
            {!showMarkCompleteButton && showButton &&
                <NavLink to={nextLink} className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">next &gt;&gt;</NavLink>
            }
        </div>
    )
}

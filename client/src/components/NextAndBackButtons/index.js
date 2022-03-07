import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MARK_COMPLETED_LESSON } from '../../utils/mutations'
import { GET_COMPLETED_LESSONS } from '../../utils/queries'

export default function BackAndNextButtons({ props }) {
    const { backLink, nextLink, Lesson_Number, Lesson_title, nextPage, previousPage } = props
    const { data } = useQuery(GET_COMPLETED_LESSONS)
    const [markComplete, { error }] = useMutation(MARK_COMPLETED_LESSON)
    // buttons show depending on these 2 values below
    let showMarkCompleteButton = false
    let showButton = false

    // completed lessons array from the users data 
    const myData = data?.getCompletedLessons.completedLessons || null

    // function for marking a lesson complete 
    const completeLesson = button => {
        // hide button immediately after click to prevent double marking complete if connection is slow or flawed 
        button.className = "hidden"

        try {
            markComplete({
                variables: {
                    lessonName: Lesson_title.trim(),
                    lessonNumber: Lesson_Number.trim()
                }
            }).then(result => {
                // if mark complete is successful, go to next page 
                if (result) {
                    window.location.href = nextLink;
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    if (error) {
        console.log(error.message)
        // if can't connect to database 
        if (error.message === 'Unexpected token P in JSON at position 0') {
            return alert('Failed to save this lesson as complete. Please try again later! If this issue continues to occur, please contact us!')
        }

        // if can't connect to internet or react
        if (error.message === 'Failed to fetch') {
            return alert('Please check your internet connection and try again!')
        }
    }

    // checks complete state of this lesson 
    if (myData) {
        let isFound = false;

        for (let i = 0; i < myData.length; i++) {
            if (myData[i].lessonName === Lesson_title) {
                isFound = true
                break
            }
        }

        // sets the state of the buttons 
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
            <div className='back-button' data-link-to={previousPage}>
                <NavLink to={backLink} className=" bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">&lt;&lt; Back</NavLink>
            </div>

            <div className='next-button' data-link-to={nextPage}>
                {showMarkCompleteButton && showButton &&
                    <div className='flex'>
                        <button className="bg-tertiary font-bold text-white button-style border-2 border-white hover:border-tertiary capitalize tracking-wider" onClick={event => completeLesson(event.target)}>Next &gt;&gt;</button>
                    </div>
                }
                {!showMarkCompleteButton && showButton &&
                    <NavLink to={nextLink} className="bg-transparent text-black button-style border border-tertiary hover:border-black font-light capitalize">next &gt;&gt;</NavLink>
                }
            </div>
        </div>
    )
}

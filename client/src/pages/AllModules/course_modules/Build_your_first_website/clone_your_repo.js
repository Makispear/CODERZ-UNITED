import BreadCrumb from '../../../../components/BreadCrumb'
import PageTracker from '../../../../components/PageTracker'
import BackAndNextButtons from '../../../../components/NextAndBackButtons'
import InfoMessage from '../../../../components/InfoMessage'
import httpsCode from "../../../../assets/images/https_link.png"
import Reference from '../../../../utils/Reference'
import pwdCommandPic from "../../../../assets/images/pwd_command.png"

import { toggleImage } from '../../../../utils/toggleImage'
import NoteMessage from '../../../../components/NoteMessage'

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
                    <span className='keyboard-key'>ls</span> stands for 'List'. This command lists all the <Reference props={{ word: "directories", ref: "folders" }} /> and files in the current directory you're on.
                </p>

                <p>
                    Take a look. Do you see <span className='keyboard-key'>Desktop/</span> in there?
                    Navigate into the <span className='keyboard-key'>Desktop/</span> folder with the following command:
                </p>
                <p>
                    <span className="git-dollar-sign">$</span><span className="code">cd Desktop</span> then press <span className="keyboard-key">Enter</span>.
                </p>

                <InfoMessage props={{ name: "Note", note: 'The slash (/) sign in front of "Desktop" indicates that it is a directory' }} />
                <p>
                    <span className='keyboard-key'>cd</span> stands for 'Change Directory'. This command is for going into or out of a Directory. Let's make sure it worked. To check which directory you're in, type in the terminal:
                </p>
                <p>
                    <span className="git-dollar-sign">$</span><span className="code">pwd</span> then press <span className="keyboard-key">Enter</span>.
                </p>
                <p>
                    <span className='keyboard-key'>pwd</span> stands for Print working directory. This will <Reference props={{ word: "print out", ref: "output" }} /> a path to the directory you're on.
                </p>

                <p>
                    lets look at the path it printed out. It should look something similar to this:
                </p>

                <div className={`flex justify-center primary-radius`}>
                    <img
                        src={pwdCommandPic}
                        alt="path to current working directory. This is what you get after typing in pwd"
                        className={`cursor-pointer image-toggled-off`}
                        onClick={e => toggleImage(e)}
                    />
                </div>

                <p>
                    This means the <span className='keyboard-key'>Desktop</span> directory is located inside <span className='keyboard-key'>your username's/</span> directory which is located in <span className='keyboard-key'>Users/</span> .
                </p>
                <InfoMessage props={{ name: "Note", note: 'Your "username" folder is the profile you created to login to your computer.' }} />
                <p>
                    Now that you know you're in your desktop, create another directory called <span className='keyboard-key'>Projects</span> to hold all your projects. Type in the following command:
                </p>
                <p>
                    <span className="git-dollar-sign">$</span><span className="code">mkdir <span className='keyboard-key custom-info'>directory name</span></span> then press <span className="keyboard-key">Enter</span>.
                </p>
                <p>
                    <span className='keyboard-key'>mkdir</span> stands for "Make Directory". <span className='keyboard-key'>mkdir</span>  is followed by the name of the folder we want to create. in our case it would "Projects".
                </p>

                <p>
                    If you go to your desktop you will find a new folder called <span className='keyboard-key'>Projects</span>. You can go and check it now. Also type in <span className='keyboard-key'>ls</span> to see what you have in your desktop. Confirm the <span className='keyboard-key'>Projects</span> directory you created is listed.
                </p>

                <p>
                    Go into <span className='keyboard-key'>Projects</span>. Remember how? Yes, with  <span className='keyboard-key'>cd Projects</span>.
                </p>
                <InfoMessage props={{ name: "Note", note: 'To go one level above (out of a directory), "cd .." will do the trick. To go two levels above then cd ../../ will do it and so on.' }} />

                <p>
                    You can finally clone the project into the project's folder. To do that, go to the project in GitHub and click on the green button that says <span className='keyboard-key'>Code</span>, and copy the <Reference props={{ word: "HTTPS", ref: "Hyper Text Transfer Protocol" }} /> link. We'll use this link to clone the project in your projects folder.
                </p>

                <div className={`flex justify-center primary-radius`}>
                    <img
                        src={httpsCode}
                        alt="path to current working directory. This is what you get after typing in pwd"
                        className={`cursor-pointer image-toggled-off border border-black`}
                        onClick={e => toggleImage(e)}
                    />
                </div>
                <NoteMessage props={{ name: "Hold up!!", note: "Make sure you're in the 'Projects' directory in your terminal before going on further. " }} />


                <p>
                    On your terminal, type in the following:
                </p>

                <p>
                    <span className="git-dollar-sign">$</span><span className="code">git clone <span className='keyboard-key custom-info'>paste HTTPS link</span></span> then press <span className="keyboard-key">Enter</span>. This should do the trick!

                    {/* TODO: ssh key here  */}

                    Now you should have the project on your local computer in your <span className='keyboard-key'>Projects</span> folder. Confirm this with <span className='keyboard-key'>ls</span>. To clear the terminal simply type in <span className='keyboard-key'>clear</span> and press <span className='keyboard-key'>Enter</span>.
                </p>

                <hr></hr>

                <p>
                    <span className='font-bold'>That's it!</span> It might feel like a lot to take in, but it will soon become second nature the more you use them on a day-to-day basis. You don't have to memorize all these commands all at once. We will remind you of them as we need them.
                </p>



            </div>






            <BackAndNextButtons props={lessonInfo} />

        </section>
    )
}

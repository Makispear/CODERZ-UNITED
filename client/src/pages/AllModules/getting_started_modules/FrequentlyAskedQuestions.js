import BreadCrumb from '../../../components/BreadCrumb'
import NoteMessage from '../../../components/NoteMessage'
import PageTracker from '../../../components/PageTracker'
import Reference from '../../../utils/Reference'
import BackAndNextButtons from '../../../components/NextAndBackButtons'

export default function Installations() {

  const lessonInfo = {
    Lesson_title: "FAQ",
    Lesson_Number: "1.1.1",
    nextLink: "/all_modules/getting_started/",
    backLink: "/all_modules/getting_started/",
  }

  document.title = `${lessonInfo.Lesson_title} | Getting Started | Lesson ${lessonInfo.Lesson_Number}`

  return (
    <section className="style-module-section">


      <div className="w-full flex justify-center font-bold p-10 text-center capitalize bg-blackGradient bg-no-repeat bg-cover bg-center">
        <h1>Intro To Web Development</h1>
        {/* <h1>Intro To Web Development <PageTracker props={{ page: Lesson_Number }} /></h1> */}
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
        <p><span className="font-bold">Welcome to the course! </span><Reference props={{ word: "We", ref: "The coderz United Team" }} /> are excited to unite and be a part of your web development journey. Before we get started, let's get you clear about your decision to become a web developer by answering common questions you might have. Getting questions out of the way can help you solidify your choice to become a web developer and remove any hesitance.</p>

        <p>Web development is more than just a job. It is a lifestyle. Once you enter the world of web development, you need to keep up with the growing tech to remain a valuable asset to a company. You should be immersed in web development and encounter it almost daily. One of the things that can help you engage is to follow people on social media who are into web development or are already working as web developers. Subscribe to a YouTube channel that keeps you up with new technologies and updates.</p>

        <p className="font-bold">Here are 10 of the most commonly asked questions people ask before starting web development:</p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          1. What is web development? And what is a web developer?
        </h2>
        <p className="w-full text-darkGray">
          A web developer is a person who codes a website utilizing tools Like HTML, CSS, and  Javascript. Web development is the creating and maintaining web applications like Google Drive, Apple.com, and Samsung Electronics.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          2. What will I learn in this course?
        </h2>
        <p className="w-full text-darkGray">
          You will be learning a bunch of new technologies to see the curriculum. Here is the <a href="notFound" className="link" >table of content</a>
        </p>
      </div>


      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          3. How do I become a great web developer?
        </h2>
        <p className="w-full text-darkGray">
          How do you best move towards mastery? To put it simply, you practice diligently, but you practice primarily for the sake of the practice itself. <span className="italic">- George Leonard</span>
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          4. Do I need to be good at math to become a web developer?
        </h2>
        <p className="w-full text-darkGray">
          No. You don't need to be good at maths to become a web developer. However, thinking logically and critically to problem-solve and <Reference props={{ word: "debug", ref: "Identify and remove errors" }} /> is something that you'll be doing very often.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          5. What tools do I need to become a web developer?
        </h2>
        <p className="w-full text-darkGray">
          All you need is a computer with at least 8GB of <Reference props={{ word: "RAM", ref: "Random-access memory" }} /> (minimum recommended) and an internet connection to your computer.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          6. What a web developer <span className="warning-word">isn't?</span>
        </h2>
        <p className="w-full text-darkGray">
          - A Web Designer. Most people come into web development after seeing nice-looking websites. If you are more into the design aspect of the website and not so much into <Reference props={{ word: "functionality", ref: "How things work" }} />, coding, and data, then web design is more suited for you. On the other hand, if you are more into logic, data, and <Reference props={{ word: "programming", ref: "coding" }} /> in general, web development is the better choice.
        </p>
        {/* Note Message  */}
        <NoteMessage
          props={{
            name: "Notice",
            note: "Although you'll be designing websites, that won't be our primary focus!"
          }}
        />
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          7. Why should I become a web developer?
        </h2>
        <p className="w-full text-darkGray">
          Web developers make a decent living and are in very high demand. Especially since the <Reference props={{ word: "Gloabal Pandemic", ref: "Covid-19" }} />, more companies are transitioning to online services.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          8. How long will it take me to become a web developer?
        </h2>
        <p className="w-full text-darkGray">
          Learning speed is different from person to person. Some people take three months while others take a year. Since this course is self-paced, you don't need to worry about how fast or steady you should be.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          9. Where do web developers work?
        </h2>
        <p className="w-full text-darkGray">
          Simple. <Reference props={{ word: "Anywhere", ref: "Any company that owns and manages a website." }} />.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          10. How do I know web development <span className="warning-word">isn't</span> for me?
        </h2>
        <p className="w-full text-darkGray">
          Web development is an always-evolving field and requires constant learning of new concepts and updates. It also requires you to work for long hours in front of a screen.
        </p>
      </div>


      <BackAndNextButtons props={lessonInfo} />

    </section>
  )
}

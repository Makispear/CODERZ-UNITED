import PrimaryButton from "../../components/Buttons/light/Primary";
import SecondaryButton from "../../components/Buttons/light/Secondary";

export default function FrequentlyAskedQuestions() {

  const markAsRead = () => {

  }


  return (
    <section className="text-black z-50 w-full bg-white flex flex-col items-center text-start sm:pt-20 md:pt-40">

      <div className="w-full flex justify-center font-bold my-10 text-center capitalize">
        <h1>Frequently asked Questions</h1>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p><span className="font-bold">Welcome to the course!</span> We are excited to unite and be a part of your web development journey. Before we get started, let's get all the questions you might have answered. We also want to make sure that you're on the right career path.</p>

        <p>Web development is more than just a job. It is a lifestyle. Once you enter the world of web development, you need to keep up with the growing tech to remain a valuable asset to a company. You should be immersed in web development and encounter it almost daily. One of the things that can help you engage is to follow people on social media who are into web development or are already working as web developers. Subscribe to a YouTube channel that keeps you up with new technologies and updates.</p>

        <p className="h2-style underline">Here are 10 of the most commonly asked questions people ask before starting web development.</p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          1. What is web development? And what is a web developer?
        </h2>
        <p className="w-full text-darkGray">
          A web developer is a person who codes a website utilizing tools Like <span className="new-word"> HTML, CSS,</span> and  <span className="new-word">Javascript.</span>
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          2. What will I learn in this course?
        </h2>
        <p className="w-full text-darkGray">
          You will be learning a bunch of new technologies to see the curriculum. Here is the <a className="link" href="#">table of content</a>
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
          No. You don't need to be good at math to become a web developer, however you need to be able to think logically and critically to be able to problem solve and <a className="link" target="_blank" href="https://www.google.com/search?q=debug+meaning">debug</a>.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          5. What tools do I need to become a web developer?
        </h2>
        <p className="w-full text-darkGray">
          All you need is a computer with at least 8GB of RAM (highly recommended), and an internet connection to your computer.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          6. What a web developer <span className="warning-word">isn't?</span>
        </h2>
        <p className="w-full text-darkGray">
          A web designer.
        </p>
        <p className="">
          Most people come into web development after looking at cool-looking websites. If you are more into the design aspect of the website and not so much into functionality, coding, and data, then web design is more suited for you. On the other hand, if you are more into logic, data, and programming in general, web development is the better choice.</p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          7. Why should I become a web developer?
        </h2>
        <p className="w-full text-darkGray">
          Web developers make a decent living and are in very high demand. Especially since Covid-19, more companies are transitioning to online services.
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
          Any company with a website.
        </p>
      </div>

      <div className="text-start flex flex-col my-1 p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 items-start w-full">
        <h2 className="text-black font-semibold mb-2 h3-style">
          10. How do I know web development <span className="warning-word">isn't</span> for me?
        </h2>
        <p className="w-full text-darkGray">
          Web development is an always-evolving field and requires learning new concepts. It also requires you to be able to work long hours in front of a screen.
        </p>
      </div>
      <div className="w-full flex items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">
        <form className="flex flex-row my-1 justify-between w-full" onSubmit={markAsRead()}>
          <SecondaryButton props={{ buttonName: "Back" }} />
          <PrimaryButton props={{ buttonName: "Mark Complete" }} />
        </form>
      </div>

    </section>
  )
}

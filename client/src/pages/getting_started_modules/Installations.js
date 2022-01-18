
export default function Installations() {

  const goBack = () => {
    window.history.back()
  }


  return (
    <section className="text-black z-50 w-full bg-white flex flex-col items-center text-start sm:pt-20 md:pt-40">

      <div className="w-full flex justify-center font-bold my-10 text-center capitalize">
        <h1>Installations</h1>
      </div>

      <div className="p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900 flex flex-col gap-5">
        <p>
          As web developers, Coding is the bread and butter of our work. Therefore it's a good idea to have the best coding tools. We can write our code anywhere; a word document, a text file, or even a notepad. A better alternative is using a code editor. A code editor is a text editor used for writing code. Code editors have many features like color-coding to help us visualize our code better and offer us many extensions to help us be efficient. We will look into the features code editors provide us later in the course.
        </p>
        <p>
          Let's download Visual Studio Code (also known as VS Code). VS Code is a
          code editor owned by Microsoft and is one of the best if not the best Code Editors web developers use. It's also free and has a ton of great features. Let's go ahead and download it now. Here is the link to the <a className="Link" href="https://code.visualstudio.com/download">download page</a>
        </p>
      </div>

      <div className="flex my-1 justify-between w-full items p-3 sm:p-10 sm:w-600 md:w-700 lg:w-900">
        <button className="bg-transparent text-black button-style border-2 border-tertiary hover:border-black font-semibold uppercase" onClick={goBack}>back</button>
        <button className="bg-black font-bold text-white button-style border-2 border-secondary hover:border-black uppercase tracking-wider">mark complete</button>
      </div>

    </section >
  )
}

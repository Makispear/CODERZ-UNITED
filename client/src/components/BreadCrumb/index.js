export default function BreadCrumb() {

  // get the url path RESULT:   /all_modules/getting_started/
  const pathName = window.location.pathname

  // make an array of letters between every (/) character RESULT:   ['all_modules', 'getting_started']
  const ArrayOfWords = pathName.substring(
    pathName.indexOf("/") + 1,
    pathName.lastIndexOf("/")
  ).split('/')

  // this is the starting point of our final result 
  let ArrayOfLinks = []

  // loop over each characters in the string. If the character is "/" switch it to "" RESULT:   ['all modules', 'getting started']
  ArrayOfWords.forEach(word => {
    // starting string 
    let tempNewWord = '';

    for (let i = 0; i < word.length; i++) {

      if (word[i] == '_') {
        tempNewWord = tempNewWord.concat(" ")
      } else {
        tempNewWord = tempNewWord + word[i]
      }

    }
    // capitalize and push to arrayOfLinks
    let finalWords = tempNewWord[0].toUpperCase() + tempNewWord.slice(1, tempNewWord.length).toLowerCase()
    ArrayOfLinks.push(finalWords)
  })

  const getLink = () => {
    let listOfLinksInOrder = []

    ArrayOfWords.forEach()
  }


  const render = () => {
    const result = ArrayOfLinks.map((element, index) => {
      return (
        <li key={index} className="text-white flex">
          <a href={getLink()}>{element}</a>
          <span className="text-tertiary">&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
        </li>
      )
    })
    return result
  }

  return (
    <ul className="w-full bg-black flex p-5">
      {render()}
    </ul>
  )
} 

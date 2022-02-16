export default function BreadCrumb({ props }) {

  const { color } = props

  // get the url path RESULT:   /all_modules/getting_started/
  const pathName = window.location.pathname

  // make sure the URL has a "/" in the end to have consistency and to ensure BreadCrumb works perfectly
  if (!pathName.endsWith('/')) {
    (() => {
      window.location.href = pathName + '/';
    })()
  }

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

      if (word[i] === '_') {
        tempNewWord = tempNewWord.concat(" ")
      } else {
        tempNewWord = tempNewWord + word[i]
      }
    }
    // capitalize and push to arrayOfLinks
    let one = tempNewWord.split(' ')
    let finalWords = one.map(word => word[0].toUpperCase() + word.substring(1, word.length).toLowerCase() + " ")
    ArrayOfLinks.push(finalWords)
  })


  const render = () => {
    const result = ArrayOfLinks.map((element, index, array) => {
      // if the link is the last color code it 
      if (index === array.length - 1) {
        return (
          <li key={index} className="flex justify-center">
            <span className="text-tertiary">&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <p className="text-tertiary text-xsm">{element}</p>
          </li>
        )
      } else {
        return (
          <li key={index} className="hidden md:flex justify-center">
            <span className="text-tertiary">&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <p className="text-xsm">{element}</p>
          </li>
        )
      }

    })
    return result
  }

  return (
    <ul className={`text-${color} hidden md:flex border-b overflow-x-auto scroll-smooth border-${color} border-opacity-50 w-full text-xsm bg-transparent flex-nowrap justify-start mb-7`}>
      {render()}
    </ul>
  )
} 

export default function BreadCrumb() {

  const link = [
    "home",
    "again"
  ]

  const render_links = () => {
    link.forEach(element => {
      console.log(element)
      return (
        <li className="text-white">
          <a href={element} >{element}</a>
        </li>
      )
    })
  }

  return (
    <ul className="w-full bg-red-600 h-full">
      {render_links()}
    </ul>
  )
} 

const getYearNow = year => {
  if (year === 2022) {
    return
  } else {
    return `- ${year}`
  }
}

const yearNow = () => new Date().getFullYear()
console.log(yearNow)

export default function Copyright() {
  return (
    <p className="bg-tertiary text-white">
      Copyright <span className="font-bold">&copy;</span> 2022{getYearNow(yearNow())} Coderz United All Rights Reserved.
    </p>
  )
}

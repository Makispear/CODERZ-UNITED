
export default function Copyright() {
  const getYearNow = (year) => {
    // let year = () => new Date().getFullYear()
    if (year === 2022) {
      return
    } else {
      return `- ${year}`
    }
  }

  let theYearToday = new Date().getFullYear()

  return (
    <p className="bg-tertiary text-white">
      Copyright<span className="font-bold">&copy;</span> 2022{getYearNow(theYearToday)} <span className="text-white">Coderz United</span> All Rights Reserved.
    </p>
  )
}

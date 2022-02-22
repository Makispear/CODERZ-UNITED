import { BrandName } from "../../utils/BrandName"

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
    <p className="bg-transparent text-secondary text-xsm">
      Copyright<span className="font-bold"> &copy;</span>Jan, 2022{getYearNow(theYearToday)} <span className="text-white">{BrandName.toUpperCase()}</span> All Rights Reserved.
    </p>
  )
}

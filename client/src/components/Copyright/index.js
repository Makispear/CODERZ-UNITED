const getYearNow = () => {
  let year = () => new Date().getFullYear()
  if (year === "2022") {
    return
  }
  return "-", year
}

export default function Copyright() {
  return (
    <p className="bg-tertiary text-white">
      Copyright<span className="font-bold">&copy;</span> 2022{getYearNow()} <a className="text-white hover:underline" href="https://makispear.github.io/Makispear/">Maki A. Maki</a> and <a href="#" className="text-white hover:underline">CODERS UNITED</a> All Rights Reserved.
    </p>
  )
}

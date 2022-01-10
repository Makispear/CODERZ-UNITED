const getYearNow = () => {
  let year = () => new Date().getFullYear()
  if (year === "2022") {
    return
  }
  return "-", year
}

export default function Copyright() {
  return (
    <p>
      Copyright<span className="font-bold">&copy;</span> 2022{getYearNow()} <a className="text-tertiary hover:underline" href="https://makispear.github.io/Makispear/">Maki A. Maki</a> and <a href="#" className="text-tertiary hover:underline">CODERS UNITED</a> All Rights Reserved.
    </p>
  )
}

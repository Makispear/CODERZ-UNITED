export default function Board() {
  return (
    <section className="gird place-content-center p-1 sm:p-15 min-h-screen w-full sm:bg-white">

      <div className="hidden sm:grid place-content-center h-90 bg-chalkboard bg-no-repeat bg-cover bg-center">
        {/* show only on desktop  */}
        <ul className="grid h-full h2-style text-white h1-style text-start sm:text-start place-content-center gap-3">
          <li className="chalk-font">1. WALK-THROUGH VIDEOS</li>
          <li className="chalk-font">2. EXAMPLES</li>
          <li className="chalk-font">3. DEEPER DIVES INTO CONCEPTS</li>
          <li className="chalk-font">4. MUCH MORE</li>
        </ul>
      </div>

      {/* show only on mobile  */}
      <div className="grid sm:hidden place-content-center h-90 bg-chalkboard bg-no-repeat bg-cover bg-center">
        <ul className="visible sm:hidden h-full h2-style text-white h1-style text-start sm:text-start place-content-center gap-3">
          <li className="chalk-font">1. WALK-THROUGH VIDEOS</li>
          <li className="chalk-font">2. EXAMPLES</li>
          <li className="chalk-font">3. DEEPER DIVES INTO CONCEPTS</li>
          <li className="chalk-font">4. MUCH MORE</li>
        </ul>
      </div>

    </section>
  )
}


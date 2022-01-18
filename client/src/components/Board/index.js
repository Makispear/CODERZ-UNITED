export default function Board() {
  return (
    <section className="gird place-content-center p-10 sm:p-28 min-h-screen w-full bg-green-800 sm:bg-white">

      <div className="hidden sm:grid place-content-center bg-green-800 h-90 sm:border-black sm:border-4">
        {/* show only on desktop  */}
        <ul className="grid h-full h2-style text-white text-2xl text-start sm:text-start sm:text-6xl place-content-center gap-3">
          <li>1. WALK-THROUGH VIDEOS</li>
          <li>2. EXAMPLES</li>
          <li>3. DEEPER DIVES INTO CONCEPTS</li>
          <li>4. MUCH MORE</li>
        </ul>
      </div>

      {/* show only on mobile  */}
      <div className="grid sm:hidden place-content-center bg-green-800 h-90 sm:border-black sm:border-4">
        <ul className="visible sm:hidden h-full h2-style text-white text-2xl text-start sm:text-start sm:text-6xl place-content-center gap-3">
          <li>1. WALK-THROUGH VIDEOS</li>
          <li>2. EXAMPLES</li>
          <li>3. DEEPER DIVES INTO CONCEPTS</li>
          <li>4. MUCH MORE</li>
        </ul>
      </div>

    </section>
  )
}


export default function Board() {
  return (
    <section className="gird place-content-center py-36 sm:p-15 h-auto sm:min-h-screen w-full bg-black">

      <div className="hidden sm:grid place-content-center h-90 bg-chalkboard bg-no-repeat bg-contain bg-center">
        {/* show only on desktop  */}
        <ul className="grid h-full text-white h2-style text-start sm:text-start place-content-center gap-3">
          <li className="chalk-font capitalize">1. Walk-through videos</li>
          <li className="chalk-font capitalize">2. Examples</li>
          <li className="chalk-font capitalize">3. Deeper dives into concepts</li>
          <li className="chalk-font capitalize">4. Much more</li>
        </ul>
      </div>

      {/* show only on mobile  */}
      <div className="grid sm:hidden place-content-center bg-chalkboard bg-no-repeat bg-contain bg-center">
        <ul className="visible sm:hidden h-full text-white h2-style text-start sm:text-start place-content-center gap-3">
          <li className="chalk-font capitalize">1. Walk-through videos</li>
          <li className="chalk-font capitalize">2. Examples</li>
          <li className="chalk-font capitalize">3. Deeper dives into concepts</li>
          <li className="chalk-font capitalize">4. Much more</li>
        </ul>
      </div>

    </section>
  )
}


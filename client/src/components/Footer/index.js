export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-black">
      <div className="w-full flex justify-between p-40">
        {/* left side  */}
        <div>
          <div>
            <h2 className="text-tertiary font-bold text-4xl">FOLLOW US ON SOCIAL MEDIA</h2>
            <ul className="text-white flex">
              <li className=" mr-3">Link</li>
              <li className=" mr-3">Link</li>
              <li className=" mr-3">Link</li>
            </ul>
          </div>
          <div>
            <h2 className="text-tertiary text-4xl font-bold">CONTACT US</h2>
          </div>
        </div>
        {/* right side  */}
        <div>
          <h2 className="text-tertiary text-4xl font-bold">SIGNUP FOR OUR WEEKLY NEWSLETTER</h2>
        </div>
      </div>


      <div className="text-secondary w-full flex justify-center">
        <p>© Year Copyright All rights reserved Brand Name</p>
      </div>
    </footer>
  )
}


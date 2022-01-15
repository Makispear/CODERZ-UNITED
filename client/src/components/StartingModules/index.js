import { useQuery } from "@apollo/client"
import { QUERY_ME } from "../../utils/queries"

export default function StartingModules() {
  const { loading, data } = useQuery(QUERY_ME);
  const myData = data?.me || {};

  return (
    <section className="w-full text-darkGray sm:py-10 px-3 my-5 flex flex-col sm:p-1 sm:mx-auto bg-white text-center">

      <div className="w-full text-left mt-10 mb-20 text-tertiary">
        <p className="h3-style capitalize">Welcome back {myData.firstName}👋</p>
      </div>

      {/* 
      <div>
        <div>
          <h1 className="text-black capitalize">Getting Started</h1>
        </div>
        <div>
          <h2>Every united coder starts by getting the tools they need to start this journey</h2>
        </div>
        <div>
          <p>In this section you will get all the tools you need to start coding effectively throughout the course</p>
        </div>
      </div> */}
    </section>
  )
} 

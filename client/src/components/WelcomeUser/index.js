import { useQuery } from "@apollo/client"
import { QUERY_ME } from "../../utils/queries"

export default function WelcomeUser() {
  const { loading, data } = useQuery(QUERY_ME);
  const myData = data?.me || {};

  if (loading) {
    <section className="bg-black flex p-5">
      <p className="text-white">Welcome back!👋</p>
    </section>
  }

  return (
    <section className="bg-black flex justify-center sm:justify-start p-5">
      <p className="text-white">Welcome <span className="text-tertiary">{myData.firstName} {myData.lastName}</span>!</p>
    </section>
  )
} 

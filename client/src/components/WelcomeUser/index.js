import { useQuery } from "@apollo/client"
import { QUERY_ME } from "../../utils/queries"

export default function WelcomeUser() {
  const { loading, data } = useQuery(QUERY_ME);
  const myData = data?.me || {};

  return (
    <section className="bg-black flex p-5">
      <p className="h3-style text-white">Welcome back {myData.firstName}!👋</p>
    </section>
  )
} 

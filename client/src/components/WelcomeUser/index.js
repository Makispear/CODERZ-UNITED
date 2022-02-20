import { useQuery } from "@apollo/client"
import { QUERY_ME } from "../../utils/queries"

export default function WelcomeUser() {
  const { loading, data } = useQuery(QUERY_ME);
  const myData = data?.me || {};
  const loginCount = data?.me.logins.length || undefined;

  if (loading) {
    <section className="bg-black flex p-5">
      <p className="text-white">Welcome!</p>
    </section>
  }

  const checkLoginCondition = () => {
    if (!loginCount) {
      return (
        <p className="text-white">Welcome to Coderz United!</p>
      )
    } else if (loginCount === 1) {
      return (
        <p className="text-white">Welcome to Coderz United <span className="text-tertiary">{myData.firstName}</span>!</p>
      )
    } else if (loginCount > 1) {
      return (
        <p className="text-white">Welcome back <span className="text-tertiary">{myData.firstName}</span>!</p>
      )
    }
  }

  return (
    <section className="bg-black flex justify-center sm:justify-start p-5">
      {checkLoginCondition()}
    </section>
  )
} 

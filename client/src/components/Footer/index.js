import { NavLink } from "react-router-dom";
import SecondaryButton from "../Buttons/black/Secondary";
import Copyright from "../Copyright";
import { QUERY_ME } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { JOIN_NEWS_LETTER } from "../../utils/mutations";
import { useState } from "react/cjs/react.development";

export default function Footer() {

  // query if signed to newsletter 
  const { loading, data } = useQuery(QUERY_ME);
  const myData = data?.me || {};
  console.log(myData.isNewsLetter)

  const [formState, setFormState] = useState({

    // rememberMe: false
  })

  // join newsletter mutation 
  const [joinNewsLetter, { error }] = useMutation(JOIN_NEWS_LETTER)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignupSubmit = async event => {
    event.preventDefault();

    try {
      await joinNewsLetter({
        variables: { ...formState },
      });
      // Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <footer className="w-full flex flex-col bg-image-flipped mt-20">
      <div className="w-full flex flex-wrap justify-between gap-5 p-10 sm:px-28 md-mx-40 pb-5">
        {/* left side  */}
        <div className="flex flex-col">
          {/* social media  */}
          <div>
            <h2 className="text-white h3-style capitalize">Follow us on social media</h2>
            <ul className="text-darkGray  flex mt-3">
              <NavLink to={"/"} className="mr-3 font-lighter hover:text-secondary">LinkedIn</NavLink >
              <NavLink to={"/"} className="mr-3 font-lighter hover:text-secondary">Instagram</NavLink >
              <NavLink to={"/"} className="mr-3 font-lighter hover:text-secondary">Facebook</NavLink >
            </ul>
          </div>
          {/* contact  */}
          <div className="mt-14 ">
            <h2 className="text-white h3-style capitalize">Contact us</h2>
            <ul className="text-darkGray  flex flex-col">
              <NavLink to={"#"} className="mt-3 hover:text-secondary">Email</NavLink >
              <NavLink to={"#"} className="mt-3 hover:text-secondary">Whatsapp</NavLink >
              <NavLink to={"#"} className="mt-3 hover:text-secondary">Text Message</NavLink >
            </ul>
          </div>
        </div>
        {/* right side  */}

        {!myData.isNewsLetter &&
          <div>
            <h2 className="text-white h3-style capitalize">Sign up for our newsletter</h2>
            <form className="w-100 h-12 flex justify-end mt-3" onSubmit={handleSignupSubmit}>
              <input className="w-full p-2 primary-radius" onChange={handleChange} />
              <SecondaryButton props={{ buttonName: "Subscribe" }} />
            </form>
          </div>
        }

        {myData.isNewsLetter &&

          <div>
            <p className="text-white h3-style capitalize">You are subscribed to our newsletter</p>
            <button className="button-style text-white border border-tertiary">Unsubscribe</button>
          </div>
        }
      </div>


      <div className="text-darkGray  w-full flex justify-center p-5">
        <Copyright />
      </div>
    </footer>
  )
}


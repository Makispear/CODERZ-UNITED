import { NavLink } from "react-router-dom";
import SecondaryButton from "../Buttons/black/Secondary";
import Copyright from "../Copyright";
import { QUERY_ME } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { JOIN_NEWS_LETTER } from "../../utils/mutations";
import { useState } from 'react';
import Auth from "../../utils/auth";

export default function Footer() {

  // query if signed to newsletter 
  const { data } = useQuery(QUERY_ME);
  const myData = data?.me || {};
  // console.log(myData.isNewsLetter)

  const [formState, setFormState] = useState({
    email: ""
  })

  // join newsletter mutation 
  const [joinNewsLetter] = useMutation(JOIN_NEWS_LETTER)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      [name]: value,
    });
    console.log(formState)
  };

  const subscribeToNewsletter = async event => {
    event.preventDefault();

    try {
      await joinNewsLetter({
        variables: { ...formState },
      });
      window.location.reload()
      // Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };




  return (
    <footer className="w-full flex flex-col bg-image-flipped mt-20">
      <div className="w-full flex flex-wrap justify-around gap-5 p-10 sm:px-28 md-mx-40 pb-5">
        {/* left side  */}
        <div className="flex flex-col">
          {/* social media  */}
          <div>
            <h2 className="text-white h3-style capitalize">Follow us on social media</h2>
            <ul className="text-darkGray  flex mt-3">
              <NavLink to={"#"} className="mr-3 font-lighter link-dark">LinkedIn</NavLink >
              <NavLink to={"#"} className="mr-3 font-lighter link-dark">Instagram</NavLink >
              <NavLink to={"#"} className="mr-3 font-lighter link-dark">Facebook</NavLink >
              <NavLink to={"#"} className="mr-3 font-lighter link-dark">YouTube</NavLink >
            </ul>
          </div>
          {/* contact  */}
          <div className="mt-14 ">
            <h2 className="text-white h3-style capitalize">Contact us</h2>
            <ul className="text-darkGray  flex flex-col">
              <NavLink to={"#"} className="mt-3 link-dark">Email</NavLink >
              <NavLink to={"#"} className="mt-3 link-dark">Whatsapp</NavLink >
              <NavLink to={"#"} className="mt-3 link-dark">SMS</NavLink >
            </ul>
          </div>
        </div>
        {/* right side  */}
        {/* if logged in but not signed to newsletter  */}
        {Auth.loggedIn() && !myData.isNewsLetter &&
          <div>
            <h2 className="text-white h3-style capitalize">Sign up for our newsletter</h2>
            <form className="w-100 h-12 flex justify-end mt-3" onSubmit={subscribeToNewsletter}>
              <input type="email" name="email" className="w-full p-2 primary-radius" />
              <SecondaryButton props={{ buttonName: "Subscribe" }} />
            </form>
          </div>
        }

        {/* if logged in and signed to newsletter  */}
        {Auth.loggedIn() && myData.isNewsLetter &&
          <div>
            <p className="text-white h3-style capitalize">Make sure to check out our newsletter</p>
            {/* <button className="button-style text-white border border-tertiary">Unsubscribe</button> */}
          </div>
        }

        {/* if not logged in  */}
        {!Auth.loggedIn() &&
          <div>
            <h2 className="text-white h3-style capitalize">Sign up for our newsletter</h2>
            <form className="w-100 h-12 flex justify-end mt-3" onSubmit={subscribeToNewsletter}>
              <input type="email" name="email" className="w-full p-2 primary-radius" onBlur={handleChange} />
              <SecondaryButton props={{ buttonName: "Subscribe" }} />
            </form>
          </div>
        }


      </div>


      <div className="text-darkGray  w-full flex justify-center p-5">
        <Copyright />
      </div>
    </footer>
  )
}


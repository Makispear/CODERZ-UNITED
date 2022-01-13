import PrimaryButton from "../Buttons/tertiary/Primary";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";


export default function SignupForm() {
  // use the signup mutation 
  const [createUser, { error }] = useMutation(CREATE_USER)

  // control the form state 
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    // rememberMe: false
  })

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
      const { data } = await createUser({
        variables: { ...formState },
      });
      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="bg-tertiary flex flex-col p-3" onSubmit={handleSignupSubmit}>
      {error &&
        <div className="flex flex-col p-2 bg-red-500 text-white border-2 border-white">
          <p>Please fill in the required fields</p>
          <p>If you can't login please try again later!</p>
        </div>
      }
      <div className="flex flex-col p-2">
        {error ?
          <label htmlFor="firstName" className="font-bold text-xl"><span className="text-red-500">* </span>First Name</label>
          :
          <label htmlFor="firstName" className="font-bold text-xl">First Name</label>
        }
        <input type="text" name="firstName" id="firstName" placeholder="ex: John" className="p-1" onBlur={handleChange} />
      </div>
      <div className="flex flex-col p-2">
        {error ?
          <label htmlFor="lastName" className="font-bold text-xl"><span className="text-red-500">* </span>Last Name</label>
          :
          <label htmlFor="lastName" className="font-bold text-xl">Last Name</label>
        }
        <input type="text" name="lastName" placeholder="ex: Smith" className="p-1" onBlur={handleChange} />
      </div>
      <div className="flex flex-col p-2">
        {error ?
          <label htmlFor="email" className="font-bold text-xl"><span className="text-red-500">* </span>Email</label>
          :
          <label htmlFor="email" className="font-bold text-xl">Email</label>
        }
        <input type="email" name="email" onBlur={handleChange} className="p-1" />
      </div>
      <div className="flex flex-col p-2">
        {error ?
          <label htmlFor="password" className="font-bold text-xl"><span className="text-red-500">* </span>Password</label>
          :
          <label htmlFor="password" className="font-bold text-xl">Password</label>
        }
        <input type="password" name="password" placeholder="●●●●●●●●" className="p-1" onBlur={handleChange} />
      </div>
      {/* <div className="p-2 font-semibold">
        <input type="checkbox" name="trainer-confirm" id="trainer-yes" className="mr-1" />
        <label for="trainer-yes">Remember me</label>
      </div> */}
      <div className="flex flex-col p-2">
        <PrimaryButton props={{ buttonName: "SIGN UP" }} />
      </div>
      <div className="flex flex-col p-2 text-white font-semibold">
        <p>Already United before? <a href="/login" className="underline">Login</a> instead.</p>
      </div>
    </form>
  )
} 

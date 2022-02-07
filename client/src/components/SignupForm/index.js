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
    <form className="flex flex-col p-3" onSubmit={handleSignupSubmit}>
      {error &&
        <div className="flex flex-col p-2 bg-red-500 text-black border-2 border-black">
          <p>Please fill in the required fields</p>
          <p>If you can't login please try again later!</p>
        </div>
      }
      <div className="flex flex-col p-3">
        {error ?
          <label htmlFor="firstName" className="text-xl text-secondary"><span className="text-red-500">* </span>First Name</label>
          :
          <label htmlFor="firstName" className="text-xl text-secondary">First Name</label>
        }
        <input type="text" name="firstName" id="firstName" placeholder="John" className="p-2 primary-radius" onBlur={handleChange} />
      </div>
      <div className="flex flex-col p-3">
        {error ?
          <label htmlFor="lastName" className="text-xl text-secondary"><span className="text-red-500">* </span>Last Name</label>
          :
          <label htmlFor="lastName" className="text-xl text-secondary">Last Name</label>
        }
        <input type="text" name="lastName" placeholder="Smith" className="p-2 primary-radius" onBlur={handleChange} />
      </div>
      <div className="flex flex-col p-3">
        {error ?
          <label htmlFor="email" className="text-xl text-secondary"><span className="text-red-500">* </span>Email</label>
          :
          <label htmlFor="email" className="text-xl text-secondary">Email</label>
        }
        <input type="email" name="email" placeholder="someone@example.com" onBlur={handleChange} className="p-2 primary-radius" />
      </div>
      <div className="flex flex-col p-3">
        {error ?
          <label htmlFor="password" className="text-xl text-secondary"><span className="text-red-500">* </span>Password</label>
          :
          <label htmlFor="password" className="text-xl text-secondary">Password</label>
        }
        <input type="password" name="password" placeholder="●●●●●●●●" className="p-2 primary-radius" onBlur={handleChange} />
      </div>
      {/* <div className="p-2 font-semibold">
        <input type="checkbox" name="trainer-confirm" id="trainer-yes" className="mr-1" />
        <label for="trainer-yes">Remember me</label>
      </div> */}
      <div className="flex flex-col p-3">
        <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider">Sign up </button>
      </div>
      <div className="flex flex-col p-2 mt-6 text-darkGray">
        <p>Already United? <a href="/login" className="link">Login</a> instead.</p>
      </div>
    </form>
  )
} 

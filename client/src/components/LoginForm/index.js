import PrimaryButton from "../Buttons/tertiary/Primary";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleLoginSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <form className="bg-tertiary flex flex-col p-3" onSubmit={handleLoginSubmit}>
      {error &&
        <div className="flex flex-col p-2 bg-red-500 text-white">
          <p>
            {error.message}
          </p>
        </div>
      }
      <div className="flex flex-col p-2">
        {error ?
          <label htmlFor="email" className="font-bold text-xl"><span className="text-red-500">* </span>Email</label>
          :
          <label htmlFor="email" className="font-bold text-xl">Email</label>
        }
        <input type="email" name="email" onChange={handleChange} className="p-1" />
      </div>
      <div className="flex flex-col p-2">
        {error ?
          <label htmlFor="password" className="font-bold text-xl"><span className="text-red-500">* </span>Password</label>
          :
          <label htmlFor="password" className="font-bold text-xl">Password</label>
        }
        <input type="password" name="password" placeholder="●●●●●●●●" className="p-1" onChange={handleChange} />
      </div>
      {/* <div className="p-2 font-semibold">
        <input type="checkbox" name="trainer-confirm" id="trainer-yes" className="mr-1" />
        <label for="trainer-yes">Remember me</label>
      </div> */}
      <div className="flex flex-col p-2">
        <PrimaryButton props={{ buttonName: "LOGIN" }} />
      </div>
      <div className="flex flex-col p-2 text-white font-semibold">
        <p>New to Coderz united? <a href="/signup" className="underline">Sign up</a> and unite with us</p>
      </div>
    </form>
  )
} 

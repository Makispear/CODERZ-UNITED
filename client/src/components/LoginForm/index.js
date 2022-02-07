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
    <form className=" flex flex-col p-3" onSubmit={handleLoginSubmit}>
      {error &&
        <div className="flex flex-col p-3 bg-red-500 text-secondary">
          <p>
            {error.message}
          </p>
        </div>
      }
      <div className="flex flex-col p-3">
        {error ?
          <label htmlFor="email" className=" text-xl text-secondary"><span className="text-red-500">* </span>Email</label>
          :
          <label htmlFor="email" className=" text-xl text-secondary">Email</label>
        }
        <input type="email" name="email" placeholder="someone@example.com" onChange={handleChange} className="p-2 primary-radius" />
      </div>
      <div className="flex flex-col p-3">
        {error ?
          <label htmlFor="password" className=" text-xl text-secondary"><span className="text-red-500">* </span>Password</label>
          :
          <label htmlFor="password" className=" text-xl text-secondary">Password</label>
        }
        <input type="password" name="password" placeholder="●●●●●●●●" className="p-2 primary-radius" onChange={handleChange} />
      </div>
      {/* <div className="p-2 font-semibold">
        <input type="checkbox" name="trainer-confirm" id="trainer-yes" className="mr-1" />
        <label for="trainer-yes">Remember me</label>
      </div> */}
      <div className="flex flex-col p-3">
        <button className="bg-tertiary font-bold text-white button-style border-2 border-secondary hover:border-tertiary capitalize tracking-wider">Login</button>
      </div>
      <div className="flex flex-col p-3 mt-6 text-darkGray ">
        <p>New to Coderz United? <a href="/signup" className="link">Sign up.</a></p>
      </div>
    </form>
  )
} 

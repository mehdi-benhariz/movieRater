import { useState } from "react";

const SignUp = () => {
const [user, setuser] = useState({username:"",password:""})
    return (
    <div class="shadow-xl p-10 bg-white max-w-xl rounded">
      <h1 class="text-4xl font-black mb-4">Login</h1>
      <div class="mb-4 relative">
        <input
          class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus 
        focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          type="text"
          autofocus
        />
        <label
          for="email"
          class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base
         cursor-text"
        >
          Email Address
        </label>
      </div>
      <div class="mb-4 relative">
        <input
          class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus 
        focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          type="password"
          autofocus
        />
        <label
          for="password"
          class="label absolute mb-0  pt-4 pl-3 leading-tighter text-gray-400 text-base 
        mt-2 cursor-text"
        >
          Password
        </label>
      </div>
      <button class="bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded">
        Submit
      </button>
    </div>
  );
};

export default SignUp;

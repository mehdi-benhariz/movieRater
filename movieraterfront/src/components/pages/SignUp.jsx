import { useState ,useEffect} from "react";
import { useCookies } from "react-cookie";
import {API} from "../Api"
const SignUp = () => {
const [user, setuser] = useState({username:"",password:""})
const [token, setToken] = useCookies(['mr-token']);

useEffect( () => {
  if(token['mr-token']) window.location.href = '/movies';
}, [token])

const handleRegister=(e)=>{
  e.preventDefault()
  API.registerUser(user)
  .then(()=>API.loginUser(user))
  .then(resp =>setToken('mr-token', resp.token))
  .catch( error => console.log(error))
}

const {username,password} =user;
const isDisabled = username.length === 0 || password.length === 0;
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
      <button class="bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded"
      onClick={handleRegister}
      disabled={isDisabled}
      >
        Submit
      </button>
    </div>
  );
};

export default SignUp;

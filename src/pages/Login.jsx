import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Logo from 'components/Logo';

library.add(faGoogle);

const Login = () => {
  return (
    <div className="bg-gray-50 h-full w-full flex flex-col items-center justify-center gap-10">
      <Logo classParams="h-24" white={false}/>
      <h2 className="text-2xl font-bold text-gray-900">Log in</h2>
      <form action="" className="flex flex-col gap-6 items-center w-3/12">
        <div className="w-full flex flex-col">
          <input type="email" placeholder="Email" className="py-3 px-3 border-b-2 mb-4"/>
          <input type="password" placeholder="Password" className="py-3 px-3 border-b-2 mb-2"/>
          <div className="remember-container flex justify-between">
          <label htmlFor="remember-me" className="flex">
              <input type="checkbox" className="flex justify-center items-center appearance-none rounded w-[20px] h-[20px] bg-gray-200 checked:bg-black self-center
              checked:before:content-['✔'] text-white" />
              <p className="inline px-2">Remember me </p>
            </label>
            <Link to="/">
              <p className="text-cyan-600">Forgot your password?</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <Link to="/admin" className="w-full">
            <button className="bg-gray-900 text-white border rounded-md py-3 px-5 w-full">Log in</button>
          </Link>
          <p className="m-2">Or</p>
          <button className="bg-gray-900 text-white border rounded-md py-3 px-5 w-full"><FontAwesomeIcon icon="fa-brands fa-google" /> Log in with Google</button>
        </div>
        <div>
          <p>Don't have an account? <Link to="/user/register"><span className="text-cyan-600">Sign up</span></Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
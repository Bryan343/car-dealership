import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="bg-gray-50 h-full w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-4xl font-bold">Sign up</h2>
      <form action="" className="w-5/12 flex flex-col gap-6 items-center">
        <div className="w-full flex flex-col">
          <div className="flex gap-5">
            <input type="text" placeholder="First name" className="w-full py-3 px-3 border-b-2 mb-4"/>
            <input type="text" placeholder="Last name" className="w-full py-3 px-3 border-b-2 mb-4"/>
          </div>
          <div className="flex gap-5">
            <input type="number" placeholder="Phone" className="w-full py-3 px-3 border-b-2 mb-4"/>
            <input type="text" placeholder="Birth date" className="w-full px-3 border-b-2 mb-4" onFocus={ e => {
              e.target.type = 'date';
            }} onBlur={ e => {
              e.target.type = 'text';
            }}/>
          </div>
          <div className="flex gap-5">
            <input type="email" placeholder="Email" className="w-full py-3 px-3 border-b-2 mb-4"/>
            <input type="password" placeholder="Password" className="w-full py-3 px-3 border-b-2 mb-4"/>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <Link to="/admin" className="w-full mb-3">
            <button className="bg-gray-900 text-white border rounded-md py-3 px-5 w-full">Sign up</button>
          </Link>
          <p>Already have an account? <Link to="/user/login"><span className="text-cyan-600">Log in</span></Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register
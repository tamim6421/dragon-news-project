import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Poviders/AuthProviders/AuthProviders";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location in the login p',location)



const handleLogin = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    // console.log(email, password)

    loginUser(email, password)
    .then( res =>{
        const user = res.user
        console.log(user)
        e.target.reset()
        navigate(location?.state ? location.state : '/')
       
    })
    .catch(error =>{
        console.log(error)
    })
}


  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10">
        <h2 className="text-2xl text-center font-bold">Login Now</h2>

        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>

        </form>
        <p className="text-center mt-4">Do not have and account? Please <Link to='/register' className="text-blue-600 font-semibold"> Register </Link> </p>
      </div>
    </div>
  );
};

export default Login;

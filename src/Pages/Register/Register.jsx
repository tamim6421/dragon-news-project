import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Poviders/AuthProviders/AuthProviders";


const Register = () => {
const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
       
        console.log(email, password,name, photo)

        createUser(email, password)
        .then( res =>{
            const user = res.user
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div>
        <Navbar></Navbar>
        <div className="my-10">
          <h2 className="text-2xl text-center font-bold">Register Now</h2>
  
          <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
  
          </form>
          <p className="text-center mt-4">Already have a account<Link to='/login' className="text-blue-600 font-semibold"> Login </Link> </p>
        </div>
      </div>
    );
};

export default Register;
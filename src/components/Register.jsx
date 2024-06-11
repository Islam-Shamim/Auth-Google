
import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const Register = () => {

    const {createUser , signinWithGoogle} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        //create user in firebase
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/login')
        })
        .catch(error =>{
            console.error(error)
        })
        
    }

    const handleGoogle = () =>{
        signinWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already have an account.<Link to='/login'><button className="btn btn-active btn-link">login</button>
                    </Link> </p>
                    <p><button onClick={handleGoogle} className="btn btn-active btn-ghost m-4">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
import Lottie from "lottie-react";
import Navbar from "../../Common/Navbar";

import loginanimation from "../../assets/login.json"
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const Login = () => {

    const { singIn } = useContext(AuthContext);


    const handelsubmition = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                console.log(result.user);

                alert("log in success")

            })
            .catch(error => {
                console.log(error.message);

            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Log In now!</h1>
                            <div className="max-w-2xl">
                                <Lottie animationData={loginanimation}>

                                </Lottie>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handelsubmition} className="card-body">
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
                                    <button className="btn bg-sky-300 hover:bg-sky-600">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
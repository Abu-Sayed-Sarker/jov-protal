import { useContext } from "react";
import Navbar from "../../Common/Navbar";
import AuthContext from "../../Context/AuthContext";


const Register = () => {

    const { setuser, singUp } = useContext(AuthContext)

    const handelsubmition = e => {
        e.preventDefault();
        const from = e.target;

        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);



        //pass word validation

        singUp(email, password)
            .then(result => {
                setuser(result.user);

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
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
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
                                    <button className="btn bg-sky-300 hover:bg-sky-600">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
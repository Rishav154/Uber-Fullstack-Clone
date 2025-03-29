import {Link} from "react-router-dom";
import {useState} from "react";

function UserSignup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        })
        console.log(userData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

    }

    return (
        <>
            <div className="p-7 h-screen flex flex-col justify-between">
                <div>
                    <img className="w-14 mb-10"
                         src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"/>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3 className="text-base font-medium mb-2">What's your name</h3>
                        <div className="flex gap-4 mb-6">
                            <input
                                type="text"
                                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-gray-500 placeholder:base"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required/>

                            <input
                                type="text"
                                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-gray-500 placeholder:base"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required/>

                        </div>


                        <h3 className="text-base font-medium mb-2">What's your email</h3>
                        <input
                            type="email"
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base mb-6 placeholder:text-gray-500 placeholder:base"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>

                        <h3 className="text-base font-medium mb-2">Enter Password</h3>
                        <input
                            type="password"
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base mb-6 placeholder:text-gray-500 placeholder:base"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        <button
                            type="submit"
                            className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-base mb-3 placeholder:text-gray-500 placeholder:base"
                        >Login
                        </button>
                        <p className="text-center">Already have a account? <Link to="/login" className="text-blue-600">Login here
                        </Link></p>
                    </form>
                </div>
                <div>
                    <p className="text-[11px] text-center">By continuing, you agree to Uber's Terms of Service and Privacy Policy.</p>
                </div>
            </div>
        </>
    );
}

export default UserSignup;
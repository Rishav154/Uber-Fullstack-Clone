import {Link} from "react-router-dom";
import {useState} from "react";

function UserLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
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
                        <h3 className="text-lg font-medium mb-2">What's your email</h3>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-7 placeholder:text-gray-500 placeholder:base"
                            placeholder="your@email.com"
                            required/>

                        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-7 placeholder:text-gray-500 placeholder:base"
                            placeholder="********"
                            required/>
                        <button
                            type="submit"
                            className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg mb-3 placeholder:text-gray-500 placeholder:base"
                        >Login
                        </button>
                        <p className="text-center">New here? <Link to="/signup" className="text-blue-600">Create new
                            Account</Link></p>
                    </form>
                </div>
                <div>
                    <button
                        className="bg-[#10b461] text-white font-semibold rounded px-4 py-2 w-full text-lg mb-2 placeholder:text-gray-500 placeholder:base"
                    >Sign in as Captain
                    </button>
                </div>
            </div>
        </>
    );
}

export default UserLogin;
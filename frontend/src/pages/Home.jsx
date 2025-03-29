import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div>
                <div
                    className="bg-cover bg-center bg-[url(https://wallpapercave.com/wp/wp7394619.jpg)] h-screen pt-8  flex justify-between flex-col w-full">
                    <img className="w-14 ml-8 invert"
                         src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"/>
                    <div className="bg-white pb-7 py-4 px-4">
                        <h2 className="text-2xl font-bold">Get Started with Uber</h2>
                        <Link
                            to="/login"
                            className="w-full bg-black text-white py-3 rounded mt-5 flex items-center justify-center">Continue</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
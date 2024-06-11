import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const {createUser} = useContext(AuthContext)
    // console.log(name)
    return (
        <div>
            <p className="text-3xl text-center">Welcome to Home</p>
            <div className="text-center">
                <p>Name : {createUser.email}</p>
                <p>Price : {createUser.password}</p>
            </div>
        </div>
    );
};

export default Home;
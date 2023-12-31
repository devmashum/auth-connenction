import React, { useContext } from 'react';
import Navbar from '../../Navbar';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);

    return (
        <div>
            <h1>Home: {authInfo.name}</h1>
        </div>
    );
};

export default Home;
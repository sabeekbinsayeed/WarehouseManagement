import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from '../../../firebase.init';
// import Loading from '../Loading/Loading';
const RequireAuth = ({ children }) => {

    // const [user, loading] = useAuthState(auth)
    // const location = useLocation()


    // if (loading) {
    //     return <Loading></Loading>
    // }

    // if (!user) {
    //     return <Navigate to='/login' state={{ from: location }}></Navigate>
    //     // return <Navigate to='/login' state={{ from: location }}></Navigate>
    // }
    // console.log(user)
    // // user.providerData[0].providerId === 'password' && 
    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    //     return <div>
    //         <h2>please verify your email</h2>
    //         <p>what is going on</p>
    //     </div>
    // }

    //const { user } = useFirebase();

    return children;
};
export default RequireAuth;
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../fireBase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user,setUser]=useState(null);
   const provider=new GoogleAuthProvider();
   const handleGoogle=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(result.user)
      console.log(user);
    }).catch((error) => {
      console.log(error);
      setUser(null)
    });
   }
   const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
        console.log('sign out');
        setUser(null)
    })
    .catch((error)=>{
        console.log(error);
    })
   }
   
   
    return (
        <div>
           
           
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleGoogle}>Login with google</button>
            }
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                </div>
            }
        </div>
    );
};

export default Login;
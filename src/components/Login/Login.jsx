import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../fireBase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user,setUser]=useState(null);
   const googleProvider=new GoogleAuthProvider();
   const githubProvider=new GithubAuthProvider
   const handleGoogle=()=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(result.user)
      console.log(user);
    }).catch((error) => {
      console.log(error);
      setUser(null)
    });
   }
   
   const handleGithubSignin=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
        console.log(result.user);
        setUser(result.user)
    })
    .catch(error=>{
        console.log(error);
        setUser(null)
    })
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
                user ? <button onClick={handleSignOut}>Sign Out</button> : 
               <div>
                 <button onClick={handleGoogle}>Login with google</button>
                 <button onClick={handleGithubSignin}>Login with Github</button>
               </div>
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
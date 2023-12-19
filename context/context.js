import { createContext, useEffect, useState} from "react";
import { collection, setDoc,getDocs, doc } from "firebase/firestore";
import { db, provider,auth } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const SpacedevContext=createContext()

const DevProvider=({children})=>{
    const [users, setUsers]= useState([])
    const [posts, setPosts]= useState([])

    const [CurrentUser,setCurrentUser]=useState(null)
    //get user data from this useEffect
    useEffect(()=>{
        const getUser=async()=>{
            const Data= await getDocs(collection(db, 'users'))
            
            setUsers(
                Data.docs.map(doc=> {
                    return{
                        id: doc.id,
                        data: {
                            ...doc.data()
                        }
                    }
                })
            )
        }
        getUser()
    }, [])

    //get blog Post data from this useEffect
    useEffect(()=>{
        const getPosts=async()=>{
            const Data= await getDocs(collection(db, 'blogs'))
    
            setPosts(
                Data.docs.map(doc=> {
                    return{
                        id: doc.id,
                        data: {
                            body: doc.data().body,
                            brief: doc.data().brief,
                            bannerImage: doc.data().bannerImage,
                            catagorypost: doc.data().topic,
                            postLength: doc.data().postLength,
                            datePosted: doc.data().datePosted,
                            title: doc.data().title,
                            author: doc.data().author,
                            likes: doc.data().likeCount,
                        }
                    }
                })
            )
        }
        getPosts()
    }, [])

    //fireStore userData Update
    const AddAuthortoFireStore=async user=>{
        await setDoc(doc(db, 'users', user.email),{
            email: user.email,
            name: user.displayName,
            imageURl:user.photoURL,
            followerCount: 0
        })
    }

    //firebase authentication
    const HandleUserAuth= async()=>{
        try {
            const userData=await signInWithPopup(auth,provider)
            const user=userData.user
            setCurrentUser(user)
            AddAuthortoFireStore(user)
        } catch (error) {
            alert("signin initiated but cancelled by the user");
        }
        
    }
    //firebase logout
    const HandleUserLogout=async()=>{
        try {
            await signOut(auth)
            setCurrentUser(null)
            alert("successfully logged out");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <SpacedevContext.Provider value={{posts, users, HandleUserAuth, HandleUserLogout, CurrentUser}}>
            {children}
        </SpacedevContext.Provider>
    )
}



export  {SpacedevContext, DevProvider}
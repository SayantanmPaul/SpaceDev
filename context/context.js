import { createContext, useEffect, useState} from "react";
import { collection, setDoc,getDocs, doc } from "firebase/firestore";
import { db, provider,auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SpacedevContext=createContext()

const DevProvider=({children})=>{
    const [users, setUsers]= useState([])
    const [posts, setPosts]= useState([])

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
    //firebase authentication
    const HandleUserAuth= async()=>{
        const userData= await signInWithPopup(auth,provider)
        const user=userData.user
        console.log(user, 'okey');
    }

    
    return(
        <SpacedevContext.Provider value={{posts, users, HandleUserAuth}}>
            {children}
        </SpacedevContext.Provider>
    )
}



export  {SpacedevContext, DevProvider}
import { createContext, useEffect, useState} from "react";
import { collection, setDoc,getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

const SpacedevContext=createContext()

const DevProvider=({children})=>{
    const [users, setUsers]= useState([])
    const [posts, setPosts]= useState([])

    useEffect(()=>{
        const getUser=async()=>{
            const Data= await getDocs(collection(db, 'user'))
    
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
    
    return(
        <SpacedevContext.Provider value={{posts, users}}>
            {children}
        </SpacedevContext.Provider>
    )
}



export  {SpacedevContext, DevProvider}
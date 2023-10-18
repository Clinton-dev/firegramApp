import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection,query,orderBy, onSnapshot } from "firebase/firestore"; 


const useFireStore = (collectionName) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const collectionRef = collection(projectFirestore, collectionName)
        const orderedQuery = query(collectionRef, orderBy("timestamp", "desc"));

        const unsub = onSnapshot(orderedQuery, (snapShot) => {
            const updatedDocs = [];
            snapShot.forEach((doc) => {
                updatedDocs.push({id: doc.id, ...doc.data()})
            })
            setDocs(updatedDocs);
        });

        // Return the unsubscribe function so that it can be used to unsubscribe from the snapshot listener when the component unmounts
        return () => unsub();
        
    }, [collectionName])

    return {docs}
}

export default useFireStore

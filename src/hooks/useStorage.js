import { useEffect, useState } from "react";
import {projectStorage, projectFirestore} from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
 

const useStorage = (file) => {
   const [progress, setProgress] = useState(0)
   const [error, setError] = useState(null)
   const [url, setUrl] = useState(null)

   useEffect(() =>{
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const collectionRef = collection(projectFirestore,'images');

    uploadTask.on(
        'state_changed', (snap) => {
            let percentage = ( snap.bytesTransferred /snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, () => {

            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                addDoc(collectionRef, {
                    url, 
                    timestamp: serverTimestamp(),
                });
                setUrl(url);
            });
        }
    );

   },[file]);

   return {progress, error, url};
   
}

export default useStorage;
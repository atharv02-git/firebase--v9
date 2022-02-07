import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

//here we are not defining collection name as we need to reuse this component again
export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null)

    useEffect(() => {
        let ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = [];
            //where snapshot.docs method is used to get all the documents from the collection 'books'
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results);
        })

        return () => unsub()
    },[c])
    return { documents }
}
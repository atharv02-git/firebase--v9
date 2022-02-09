import { useEffect, useState, useRef } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

//here we are not defining collection name as we need to reuse this component again
export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  // setting up query
  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    // function to show data that belongs to the only user who created
    if(q){
        //as q is an array we need to spread it so that we can read it
        ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      //where snapshot.docs method is used to get all the documents from the collection 'books'
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c, q]);
  return { documents };
};

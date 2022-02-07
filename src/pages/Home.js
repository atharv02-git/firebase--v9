import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

// firestore db
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const ref = collection(db, "books");

    getDocs(ref).then((snapshot) => {
      let results = [];
      //where snapshot.docs method is used to get all the documents from the collection 'books'
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
      setBooks(results);
    });
  }, []);
  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}

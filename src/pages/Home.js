import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection"
export default function Home() {
  const { documents: books } = useCollection('books')
  // const { documents } = useCollection('books')
  return (
    <div className="App">
      {books && <BookList books={books} />} 
      {/* {documents && <BookList books={documents} />} */}
      <BookForm />
    </div>
  );
}

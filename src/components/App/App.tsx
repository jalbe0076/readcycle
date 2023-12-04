import { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { getBooks } from '../../apiCalls';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    imageLinks: {smallThumbnail: string}
  }
}

function App() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    (async() => {
      try {
        const data = await getBooks('harry potter');
        console.log(data.items)
        data && setSearchResults(data.items);
        data && setTotalResults(data.totalItems);
      } catch (error) {
        console.log(error)
      }
    })();
  },[]);

  const books = searchResults.map(book => {
    const {title, authors, publisher, imageLinks } = book.volumeInfo;
    console.log(imageLinks)
    return (
      <article>
        <img src={imageLinks.smallThumbnail}/>
        <h2>{title}</h2>
      </article>
    );
  });

  return (
    <div className="App">
      {books}
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import { getBooks } from '../../apiCalls';
import { Book } from '../../types';
import SearchedBooks from '../SearchedBooks/SearchedBooks';

function App() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    (async() => {
      try {
        const data = await getBooks('harry potter');
        data && setSearchResults(data.items);
        data && setTotalResults(data.totalItems);
      } catch (error) {
        console.log(error)
      }
    })();
  },[]);

  return (
    <div className="App">
      {searchResults && <SearchedBooks bookResults={searchResults} />}
    </div>
  );
}

export default App;

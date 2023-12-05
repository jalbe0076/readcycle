import { useEffect, useState } from 'react';
import './App.css';
import { getBooks } from '../../apiCalls';
import { Book } from '../../types';
import SearchedBooks from '../SearchedBooks/SearchedBooks';
import SearchFormApi from '../SearchFormApi/SearchFormApi';

function App() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);

  // useEffect(() => {
    
  // }, []);

  const getSearchResult = async(searchInput: string) => {
    console.log('search', searchInput)
    try {
      const data = await getBooks(searchInput);
      data && setSearchResults(data.items);
      data && setTotalResults(data.totalItems);
      console.log('data', data.items)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <SearchFormApi getSearchResults={getSearchResult} />
      {searchResults && <SearchedBooks bookResults={searchResults} />}
    </div>
  );
}

export default App;

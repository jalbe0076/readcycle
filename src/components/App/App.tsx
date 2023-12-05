import { useEffect, useState } from 'react';
import './App.css';
import { getBooks } from '../../apiCalls';
import { Book } from '../../types';
import SearchedBooks from '../SearchedBooks/SearchedBooks';
import SearchFormApi from '../SearchFormApi/SearchFormApi';

function App() {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [numberOfResults, setNumberOfResults] = useState<number>(10);
  const [searchInputSaved, setsearchInputSaved] = useState<string>('');

  const getSearchResult = async(searchInput: string) => {
    setsearchInputSaved(searchInput)
    try {
      setNumberOfResults(10)
      const data = await getBooks(searchInput);
      data && setSearchResults(data.items);
      data && setTotalResults(data.totalItems);
      console.log('data', data.items)
    } catch (error) {
      console.log(error)
    }
  }

  const handleViewMore = async() => {
    try {
      setNumberOfResults(prev => prev + 10)
      const data = await getBooks(searchInputSaved, numberOfResults);
      setSearchResults(prev => [...prev, ...data.items]);
      console.log('after', searchResults)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <SearchFormApi getSearchResults={getSearchResult} />
      {searchResults && <SearchedBooks bookResults={searchResults} />}
      <button onClick={handleViewMore} >view more</button>
    </div>
  );
}

export default App;

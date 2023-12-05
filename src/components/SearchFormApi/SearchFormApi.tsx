import { useState, ChangeEvent, FormEvent } from "react";

interface SearchFormApiProps {
  getSearchResults: (searchInput: string) => void;
}

const SearchFormApi = ({getSearchResults}: SearchFormApiProps) => {
  const [searchInput, setSearchInput] = useState<string>('');
  
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSearchResults(searchInput);
    setSearchInput('');
  }

  return (
    <form onSubmit={handleSearch}>
      <input value={searchInput} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} placeholder="Search" />
    </form>
  )
};

export default SearchFormApi;
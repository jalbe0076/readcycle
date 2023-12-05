import { useState } from "react";

const SearchFormApi = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  
  return (
    <form>
      <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" />
    </form>
  )
};

export default SearchFormApi;
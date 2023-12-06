import { Book } from "../../types";
import BookThumb from "../BookThumb/BookThumb";

const SearchedBooks= ({ bookResults, totalResults, numberOfResults }: { bookResults: Book[], totalResults: number, numberOfResults: number }) => {

  const books = bookResults.map((book, i)=> {
    const {id, volumeInfo} = book;
    return (
      <BookThumb key={i} id={id} volumeInfo={volumeInfo}/>
    );
  });

  return (
    <>
      <p>{numberOfResults} of {totalResults} results</p>
      {books}
    </>
  );
};

export default SearchedBooks;
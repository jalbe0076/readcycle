import { Book } from "../../types";
import BookThumb from "../BookThumb/BookThumb";

const SearchedBooks= ({ bookResults }: { bookResults: Book[] }) => {

  const books = bookResults.map(book=> {
    const {id, volumeInfo} = book;
    return (
      <BookThumb key={id} volumeInfo={volumeInfo}/>
    );
  });

  return (
    <>
      {books}
    </>
  );
};

export default SearchedBooks;
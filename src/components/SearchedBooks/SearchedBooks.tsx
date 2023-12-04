import { Book } from "../../types";

const SearchedBooks= ({ bookResults }: { bookResults: Book[] }) => {

  const books = bookResults.map(book=> {
    const {id, volumeInfo} = book;
    const {title, authors, publisher, imageLinks } = volumeInfo;
  
    return (
      <article>
        <img src={imageLinks.smallThumbnail}/>
        <h2>{title}</h2>
      </article>
    );
  });

  return (
    <>
      {books}
    </>
  );
};

export default SearchedBooks;
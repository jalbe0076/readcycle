import { VolumeInfo } from "../../types";

const BookThumb = ({ volumeInfo, id }: { volumeInfo: VolumeInfo, id: string }) => {
  const {title, authors, publishedDate, imageLinks } = volumeInfo;

  return (
    <article>
          <img src={imageLinks ? imageLinks.smallThumbnail : process.env.PUBLIC_URL + '/images/no-cover.jpg'}/>
          <h2>{title}</h2>
          <p>{authors && `by: ${(authors.length > 3) ? authors.slice(0, 3).join(', ') + ', (...)' : authors.join(', ')}`}{(authors && publishedDate) && ' | '}{publishedDate && publishedDate.slice(0, 4)}</p>
        </article>
  );
};

export default BookThumb;
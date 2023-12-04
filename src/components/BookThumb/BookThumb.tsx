import { VolumeInfo } from "../../types";

const BookThumb = ({ volumeInfo }: { volumeInfo: VolumeInfo }) => {
  const {title, authors, publisher, imageLinks } = volumeInfo;

  return (
    <article>
          <img src={imageLinks.smallThumbnail}/>
          <h2>{title}</h2>
          <p>by: {authors} | {publisher}</p>
        </article>
  );
};

export default BookThumb;
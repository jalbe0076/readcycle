import { VolumeInfo } from "../../types";

const BookThumb = ({ volumeInfo }: { volumeInfo: VolumeInfo }) => {
  const {title, authors, publishedDate, imageLinks } = volumeInfo;

  return (
    <article>
          <img src={imageLinks.smallThumbnail}/>
          <h2>{title}</h2>
          <p>by: {authors.join(', ')} | {publishedDate.slice(0, 4)}</p>
        </article>
  );
};

export default BookThumb;
export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    imageLinks: {smallThumbnail: string};
  };
};

export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    imageLinks: {smallThumbnail: string};
};
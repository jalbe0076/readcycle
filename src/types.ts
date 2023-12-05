export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
};

export interface VolumeInfo {
    title: string;
    authors: string[];
    publishedDate: string;
    imageLinks: {smallThumbnail: string};
};
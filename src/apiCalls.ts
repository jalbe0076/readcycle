export const getBooks = async (search: string, startResult: number = 0) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startResult}`);
  const data = await handleError(response);
  return data;
}

const handleError = (response: Response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
  }
}
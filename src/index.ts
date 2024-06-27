export const getMetadata = async (url: string) => {
  if (!url) {
    return { error: "Please enter url" };
  }
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  const isValid = urlRegex.test(url);

  if (isValid) {
    const res = await fetch(
      "https://metadata-fetcher.vercel.app/api/meta-data?url=" + url
    );

    try {
      if (!res.ok) {
        return { error: `Failed to fetch the URL: ${res.statusText}` };
      }
      const response = await res.json();
      return response;
    } catch (error) {
      return { error: `An error occurred: ${error}` };
    }
  } else {
    return { error: "Please enter valid url" };
  }
};

// getMetadata(
//   "https://www.youtube.com/watch?v=pksTz4IBRVs&list=PLu1NXqt4iKA9mHnZvsWXohjExmJwwVUMl&index=7"
// )
//   .then((metadata) => console.log(metadata))
//   .catch((error) => console.error(error));

import * as cheerio from "cheerio";

export const getMetadata = async (url: string) => {
  if (!url) {
    return { error: "Please enter url" };
  }
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  const isValid = urlRegex.test(url);

  if (isValid) {
    const res = await fetch(url);

    try {
      if (!res.ok) {
        return { error: `Failed to fetch the URL: ${res.statusText}` };
      }
      console.log(res);

      const response = await res.text();
      const $ = cheerio.load(response);
      const ogTags = {
        title: $('meta[property="og:title"]').attr("content") || null,
        description:
          $('meta[property="og:description"]').attr("content") || null,
        image: $('meta[property="og:image"]').attr("content") || null,
        url: $('meta[property="og:url"]').attr("content") || null,
        keywords: $('meta[name="keywords"]').attr("content") || null,
        canonical: $('link[rel="canonical"]').attr("href") || null,
      };
      return ogTags;
    } catch (error) {
      return { error: `An error occurred: ${error}` };
    }
  } else {
    return { error: "Please enter valid url" };
  }
};

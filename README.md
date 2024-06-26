# URL Metadata Fetcher

This Node.js module fetches and extracts metadata from a given URL using Cheerio. The extracted metadata includes Open Graph tags, keywords, and the canonical URL.



## Install


```bash
  npm i metadata-fetch
```


## Usage

```js
import { getMetadata } from 'metadata-fetch';


// Example URL
const url = 'https://example.com';
const getData = async() => await getMetadata(url).then(metadata => {
console.log(metadata);
});
getData()

//getMetadata(url: string)
Fetches the metadata from the provided URL.
```
## Result
```json
{
"title": "Open Graph title",
"description": "Open Graph description",
"image": "Open Graph image URL",
"url": "Open Graph URL",
"keywords": "Page keywords",
"canonical": "Canonical URL"
}
```
## Error Object Structure
```json
{
"error": "Error message"
}
```

## Error Handling
The getMetadata function handles errors gracefully and returns an error message in the following cases:

If the URL is not provided.

If the URL is not valid.

If the fetch request fails.

If an error occurs during the extraction of metadata.

This package is made using [cheerio](https://www.npmjs.com/package/cheerio)❤️.

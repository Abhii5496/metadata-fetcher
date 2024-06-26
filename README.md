URL Metadata Fetcher
This Node.js module fetches and extracts metadata from a given URL using Cheerio. The extracted metadata includes Open Graph tags, keywords, and the canonical URL.

Table of Contents
Installation
Usage
Functions
Example
Error Handling

Installation
To use this module, you need to have Node.js and npm installed. You can install the required dependencies by running:

bash
Copy code
npm install cheerio
Usage
Import the module and call the getMetadata function with a URL as an argument.

javascript
Copy code
import { getMetadata } from './path/to/module';

// Example URL
const url = 'https://example.com';

getMetadata(url).then(metadata => {
console.log(metadata);
});
Functions
getMetadata(url: string)
Fetches the metadata from the provided URL.

Parameters:

url (string): The URL from which to fetch metadata.
Returns:

An object containing the metadata or an error message.
Metadata Object Structure
json
Copy code
{
"title": "Open Graph title",
"description": "Open Graph description",
"image": "Open Graph image URL",
"url": "Open Graph URL",
"keywords": "Page keywords",
"canonical": "Canonical URL"
}
Error Object Structure
json
Copy code
{
"error": "Error message"
}
Example
javascript
Copy code
import { getMetadata } from './path/to/module';

const url = 'https://example.com';

getMetadata(url).then(metadata => {
if (metadata.error) {
console.error(metadata.error);
} else {
console.log(metadata);
}
});
Error Handling
The getMetadata function handles errors gracefully and returns an error message in the following cases:

If the URL is not provided.
If the URL is not valid.
If the fetch request fails.
If an error occurs during the extraction of metadata.

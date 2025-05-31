

# Metadata Fetcher & Scraper [🌐](https://metadata-fetcher.vercel.app/)

**metadata-fetch** is a lightweight JavaScript library that fetches and extracts/scrapes essential
metadata (Open Graph, Twitter Cards, favicons, canonical URLs, and SEO tags) from any webpage URL —  
perfect for generating rich link previews and auditing SEO data with ease.

---

## ✨ Features

- ✅ Fetch Open Graph tags (`og:title`, `og:image`, etc.)
- ✅ Parse Twitter Card metadata (`twitter:title`, `twitter:image`, etc.)
- ✅ Parse Facebook metadata (`og:title`, `og:image`, etc.)
- ✅ Extract favicon, canonical URL, charset, and theme color
- ✅ SEO-friendly output for integration into UIs or dashboards
- ✅ Fully async and promise-based

---

## 🚀 Installation

```bash
npm install metadata-fetch
```

## 🔧 Usage

```js
import { getMetadata } from "metadata-fetch";

const url = "https://example.com";

const getData = async () => {
  const response = await getMetadata(url);
  console.log(response);
};

getData();
```

### ✅ getMetadata(url: string)
Fetches metadata from a given URL and returns a structured object.

---

## 📦 Example Response

```json
{
  "success": true,
  "data": {
    "id": "c6307698-b1ae-497a-b3ce-132ea94ed3b1",
    "title": "Tailwind CSS Search Input - Flowbite",
    "description": "Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes",
    "keywords": null,
    "author": "Themesberg",
    "favicon": "/docs/android-icon-192x192.png",
    "canonical": "https://flowbite.com/docs/forms/search-input/",
    "themeColor": "#ffffff",
    "charset": "utf-8",
    "url": "https://flowbite.com/docs/forms/search-input/",
    "image": "https://flowbite.com/docs/images/og-image.png",
    "facebook": {
      "title": "Tailwind CSS Search Input - Flowbite",
      "description": "Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes",
      "image": "https://flowbite.com/docs/images/og-image.png",
      "url": "https://flowbite.com/docs/forms/search-input/",
      "type": "article",
      "siteName": null
    },
    "twitter": {
      "title": "Tailwind CSS Search Input - Flowbite",
      "description": "Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes",
      "image": "https://flowbite.com/docs/images/og-image.png",
      "card": "summary",
      "site": "@",
      "creator": "@"
    }
  }
}
```

---

## ❌ Error Handling

If something goes wrong (invalid URL, fetch failure, etc.), the function returns a structured error:

```json
{
  "error": "Invalid URL or fetch error"
}
```

---

## 🌐 Live Demo

Try it online at: [https://metadata-fetcher.vercel.app](https://metadata-fetcher.vercel.app)

---

## 📄 License

MIT


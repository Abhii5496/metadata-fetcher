
# Metadata Fetcher & Scraper [🌐](https://metadata-fetcher.vercel.app/)

metadata-fetch is a lightweight JavaScript library that fetches and extracts/scrape essential
metadata (Open Graph, Twitter Cards, favicons, canonical URLs, and SEO tags) from any webpage URL —
perfect for generating rich link previews and auditing SEO data with ease.

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
  "data": {
    "id": "f9e65b3e-136a-41a1-b3c5-6f80dc66a48a",
    "title": "Metadata Fetcher & Scraper Tool | Preview Open Graph & SEO Tags",
    "description": "Fetch and visualize website metadata including Open Graph, Twitter Cards, favicons, canonical URLs, and more.",
    "keywords": "metadata fetcher,metadata scraper,open graph viewer,twitter card preview,SEO metadata tool,website metadata,link preview generator,social media preview",
    "author": null,
    "favicon": "/favicon.ico",
    "canonical": "https://metadata-fetcher.vercel.app/",
    "themeColor": null,
    "charset": "utf-8",
    "url": "https://metadata-fetcher.vercel.app",
    "image": "https://metadata-fetcher.vercel.app/api/og",
    "facebook": {
      "title": "Metadata Fetcher & Scraper Tool",
      "description": "Easily extract and preview Open Graph, Twitter Card, favicon, and canonical metadata from any webpage.",
      "image": "https://metadata-fetcher.vercel.app/api/og",
      "url": "https://metadata-fetcher.vercel.app",
      "type": "website",
      "siteName": "Metadata Fetcher"
    },
    "twitter": {
      "title": "Metadata Fetcher & Scraper Tool",
      "description": "Instantly fetch and visualize Open Graph, Twitter Card, and SEO tags from any webpage.",
      "image": "https://metadata-fetcher.vercel.app/api/og",
      "card": "summary_large_image",
      "site": "@Abhii5496",
      "creator": "@Abhii5496"
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

## ✨ Features

- ✅ Fetch Open Graph tags (og:title, og:image, etc.)
- ✅ Parse Twitter Card metadata (twitter:title, twitter:image, etc.)
- ✅ Parse Facebook Card metadata (facebook:title, facebook:image, etc.)
- ✅ Extract favicon, canonical URL, charset, and theme color
- ✅ SEO-friendly output for integration into UIs or dashboards
- ✅ Fully async and promise-based

---

## 🌐 Live Demo

Try it online at: [https://metadata-fetcher.vercel.app](https://metadata-fetcher.vercel.app)

---

## 📄 License

MIT

---

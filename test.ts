const { getMetadata } = require("metadata-fetch")

const GetData = async () =>
  await getMetadata("https://metadata-fetcher.vercel.app/").then(res => console.log(res))

GetData()

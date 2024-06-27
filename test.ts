const { getMetadata } = require("metadata-fetch");

const GetData = async () =>
  await getMetadata("https://flowbite.com/docs/forms/search-input/").then(
    (res) => console.log(res)
  );

GetData();

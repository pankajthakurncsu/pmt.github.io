
//Here's our query we constructed in the GraphiQL interface
const query = `{
    microblogCollection {
      items {
        sys {
          firstPublishedAt
        }
        text
        image {
          url
          title
          width
          height
          description
        }
        panther
        link
        linkText
      }
    }
  }`
  
  // Here are our options to use with fetch
  const fetchOptions = {
    spaceID: "yourSpaceId",
    accessToken: "yourAccessToken",
    endpoint: "https://graphql.contentful.com/content/v1/spaces/yourSpaceID",
    method: "POST",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }
  
  // Let's fetch the data - check out the browser console!
  fetch(endpoint, fetchOptions)
    .then(response => response.json())
    .then(data => console.log(data));
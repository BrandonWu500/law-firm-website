export async function getPosts() {
  const query = /* GraphQL */ `
    {
      posts(first: 5) {
        nodes {
          title
          uri
          excerpt
          date
          featuredImage {
            node {
              uri
              altText
            }
          }
          author {
            node {
              name
              description
            }
          }
          content
        }
      }
    }
  `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  try {
    const { data } = await res.json();

    return data.posts.nodes;
  } catch (error) {
    console.log(error);
  }
}

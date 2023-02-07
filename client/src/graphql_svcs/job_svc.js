import { request, gql } from 'graphql-request';

const GRAPHQL_SERVER = 'http://localhost:9000/graphql';

export async function getJobs() {
    const query = gql`
    query {
        jobs {
          id 
          title 
          description
          company {
            name
          }
        }
      }
    `;
    const data = await request(GRAPHQL_SERVER, query);
    console.log(data)
}
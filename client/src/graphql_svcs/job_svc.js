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
  return data.jobs
}

export async function getJob(id) {
  const query = gql`
    query JobQry($id: ID!) {
        job(id: $id) {
          id
          title 
          company {
            name
            id
          }
        }
      }
    `;
  const vars = { id }
  const data = await request(GRAPHQL_SERVER, query, vars);

  return data.job
}

export async function getCompany(id) {
  const query = gql`
    query CompanyQry($id: ID!) {
        company(id: $id) {
          id
          title 
          description
        }
      }
    `;
  const vars = { id }
  const data = await request(GRAPHQL_SERVER, query, vars);

  return data.company
}
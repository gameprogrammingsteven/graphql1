import JobList from './JobList';
import { getJobs } from '../graphql_svcs/job_svc'
import { useState, useEffect } from 'react';
// getJobs();

function JobBoard() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // console.log('mount');
    getJobs().then((jobsList) => {
      setJobs(jobsList)
      //setJobs by itself will take the lambda arg
    })
  }, [])

  console.log("Job: " + jobs)
  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;

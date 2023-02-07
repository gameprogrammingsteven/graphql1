import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getJob } from '../graphql_svcs/job_svc';
import { Link } from 'react-router-dom';

function JobDetail() {
  const [job, setJob] = useState(null);

  const { jobId } = useParams();

  useEffect(() => {
    getJob(jobId).then(setJob);
  }, [jobId])

  // const job = jobs.find((job) => job.id === jobId);
  if (!job) {
    return <p>Fetching Data</p>
  }
  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

export default JobDetail;

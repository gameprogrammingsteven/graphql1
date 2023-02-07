import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../graphql_svcs/job_svc';
// import { companies } from '../fake-data';

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  useEffect(() => {
    getCompany(companyId).then(setCompany)
  }, [company])

  return (
    company ?
      <div>
        <h1 className="title">
          {company.name}
        </h1>
        <div className="box">
          {company.description}
        </div>
      </div> : <div>Loading</div>
  );
}

export default CompanyDetail;

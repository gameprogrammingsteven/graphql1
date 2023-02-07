import { Job, Company } from "../db.js";

export const resolvers = {
    Query: {
        jobs: () => Job.findAll(),
        job: (_root, { id }) => {
            return Job.findById(id)
        },
        company: (_root, { id }) => {
            return Company.findById(id)
        }
    },
    Job: {
        company: (job) => Company.findById(job.companyId)
    }
};
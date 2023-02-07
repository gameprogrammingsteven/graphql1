import { Job, Company } from "../db.js";

export const resolvers = {
    Query: {
        jobs: () => Job.findAll(),
        job: (root, argDictionary) => {
            const { id } = argDictionary; //can shortcut in argument
            return Job.findById(id)
        }
    },
    Job: {
        company: (job) => Company.findById(job.companyId)
    }
};
import { ProxyState } from "../AppState.js";
import { Jobs } from "../Models/Job.js";




class JobsService{

createJob(newJob){
    ProxyState.jobs = [...ProxyState.jobs, new Jobs(newJob)]
}

}

export const jobsService =  new JobsService
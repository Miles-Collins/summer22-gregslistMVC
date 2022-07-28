import { ProxyState } from "../AppState.js"
import { jobForm } from "../Models/Job.js"
import { jobsService } from "../Services/JobsService.js";




function _drawJobs(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}

function _drawJobsForm(){
  document.getElementById('form').innerHTML = jobForm()
}


export class JobsController{

viewJobs(){
  _drawJobs()
  _drawJobsForm()
}

createJobs(){
  console.log("Submitted")
  window.event.preventDefault()
  let form = window.event.target
  console.log(form);

  let newJob = {
    image: form.image.value,
    description: form.description.value,
    benefits: form.benefits.value,
    pay: form.pay.value,
    date: form.date.value,
    location: form.location.value
  }

  jobsService.createJob(newJob)
  form.reset()
  _drawJobs()
}
}


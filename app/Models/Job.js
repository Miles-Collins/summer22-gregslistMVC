import { generateId } from '../Utils/generateId.js'

export class Jobs{
  constructor({image, description, benefits, pay, date, location}) {
    this.image = image,
    this.description = description,
    this.benefits = benefits,
    this.pay = pay,
    this.date = date
    this.location = location
  }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid myCard" src="${this.image}" alt="">
        <div class="p-2">
          <p>${this.date}</p>
          <h3 class="text-center"> ${this.description} ${this.location}</h3>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}

export function jobForm(){
  return `
  <form class="col-10 bg-white p-3 elevation-2" onsubmit="app.jobsController.createJobs()">
        <h3 class="text-primary">List Your Job!</h3>
        <div class="row">
          <div class="col-4">
            <label class="form-label" for="location">Job Title</label>
            <input class="form-control" type="text" minlength="5" id="location" name="location">
          </div>
          <div class="col-4">
            <label class="form-label" for="date">Date</label>
            <input class="form-control" type="text" id="date" name="date">
          </div>
          <div class="col-4">
            <label class="form-label" for="year">Pay</label>
            <input class="form-control" type="number" id="pay" name="pay">
          </div>
          <label class="form-label" for="price">Benefits</label>
          <input class="form-control" type="text" min="1" id="benefits" name="benefits">
          <label class="form-label" for="img">Image</label>
          <input class="form-control" type="text" id="image" name="image">
          <label class="form-label" for="description">Description</label>
          <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
          <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
        </div>
      </form>
  `
}


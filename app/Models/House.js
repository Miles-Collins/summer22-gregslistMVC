import { generateId } from '../Utils/generateId.js'

export class House{
  constructor({image, price, beds, baths, sqft, address}){
    this.image = image,
    this.price = price,
    this.beds = beds,
    this.baths = baths,
    this.sqft = sqft,
    this.address = address
  }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.image}" alt="">
        <div class="p-2">
          <h4 class="text-center">Beds: ${this.beds} | Baths: ${this.baths} | Sqft. ${this.sqft}</h4>
          <h2 class="text-center">Price: $${this.price}</h2>
          <p class="text-center m-0"><b>${this.address}</b></p>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>
    `
  }
}
export function houseForm(){
    return `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="app.housesController.createHouse()">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="make">Beds</label>
              <input class="form-control" type="number" minlength="1" id="beds" name="beds">
            </div>
            <div class="col-4">
              <label class="form-label" for="model">Baths</label>
              <input class="form-control" type="number" id="baths" name="baths">
            </div>
            <div class="col-4">
              <label class="form-label" for="year">Sqft</label>
              <input class="form-control" type="number" id="sqft" name="sqft">
            </div>
            <label class="form-label" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price">
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="image" name="image">
            <label class="form-label" for="description">Address</label>
            <textarea class="w-100 form-control" name="address" id="address" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>
    `
}
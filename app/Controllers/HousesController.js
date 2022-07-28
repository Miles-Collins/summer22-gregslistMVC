import { ProxyState } from "../AppState.js"
import { houseForm } from "../Models/House.js"
import { houseService } from "../Services/HouseService.js";

function _drawHouses(){
  let template = ''
  let house = ProxyState.houses
  house.forEach(h => template += h.Template)
  console.log('drawing cars', template)
  document.getElementById('listings').innerHTML = template
}

function _drawForm(){
  document.getElementById('form').innerHTML = houseForm()
}


export class HousesController{



  viewHouses(){
    _drawHouses()
    _drawForm()
    // swap out car form with house form
  }

  createHouse(){
    console.log("Submitted")
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

    let newHouse ={
      image: form.image.value,
      price: form.price.value,
      beds: form.beds.value,
      baths: form.baths.value,
      sqft: form.sqft.value,
      address: form.address.value
    }
    houseService.createHouse(newHouse)
    form.reset()
    _drawHouses()
  }

  deleteCar(id){
    console.log('deleteing', id);
    housesService.deleteCar(id)
  }
}
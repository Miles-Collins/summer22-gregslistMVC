import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";



export function saveState(){
  console.log('saving');
  let carData = JSON.stringify(ProxyState.cars)
  let houseData = JSON.stringify(ProxyState.houses)
  localStorage.setItem('cars', carData)
  localStorage.setItem('houses', houseData)
}

export function loadState(){
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  if(rawCars){
    let carData = JSON.parse(rawCars)
    console.log(carData);
    ProxyState.cars = carData.map(c => new Car(c))
  }
}
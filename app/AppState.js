import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Jobs } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make:'Honda', model:'CRV3-XL PLUS', year:2023, price:100000, img:'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future'}),
    new Car({make:'Tesla', model:'Cyber truck', year:3000, price:5, img:'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description:'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.'})
  ]

  houses = [
    new House({image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80', price:1000000, beds: 5, baths: 5, sqft: 4500, address:'1738 Remy Rd, Boise, ID 83706' })
  ]

  jobs = [
    new Jobs({image: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', description:'ASTRONAUT, GOING TO MARS!', benefits:"401k, and free Dental!", pay:47, date:'Jul 14th', location:"SPACE!"})
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js";





class HouseService{

createHouse(newHouse){
ProxyState.houses = [...ProxyState.houses, new House(newHouse)]
}

deleteHouse(id){
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)

}

}



export const houseService = new HouseService
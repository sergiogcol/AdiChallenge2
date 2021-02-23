import { makeObservable, observable, action } from "mobx"

interface RainfallByDay {
    day: number;
    amount: number;
}
export class RainDataStoreImpl {
    pressure: number = 970
    temperature: number = 10
    days: RainfallByDay[] = []

    constructor(){
        makeObservable(this, {
            pressure: observable,
            temperature: observable,
            modifyPressure: action,
            modifyTemperature: action
        })
    }

    modifyPressure(value: number) {
        this.pressure = value
    }

    modifyTemperature(value: number) {
        this.temperature = value
    }

    addDay(day: RainfallByDay){
        this.days.push(day) 
    }
}

export const RainDataStore = new RainDataStoreImpl();
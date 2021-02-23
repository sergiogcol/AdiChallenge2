import { makeObservable, observable, action } from "mobx"

export class RainDataStoreImpl {
    pressure: number = 970
    temperature: number = 10

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
}

export const RainDataStore = new RainDataStoreImpl();
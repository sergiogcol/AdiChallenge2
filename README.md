# The Weather Dashboard 

## Description

This app provides information about the expected rainfall in the upcoming days. It is implemented using Next.js as a React framework, MobX for state management, and Effect-Ts a zero dependency set of libraries to write purely functional TypeScript at scale.

## Installation

Run `yarn` and then `yarn start`to run the app.

## Documentation

#### Entry point: src/pages/index.tsx

On this file, a sync effect is used to house the following the operations:

1. Execute the *getBarChartValues* method to retrieve the `amount of rainfall` data from the API.

2. Execute the *propagateExit* method, which matches the result of the data fetching operation with the state of the *HomeComponent*.

3. Return the *HomeComponent*.

#### Main component: src/components/home/index.tsx

*makeHome* is a sync effect that contains a serie of methods that are executed based on the success of the `amount of rainfall` data fetch operation. 

If the operation is successful the *Done* method will be executed, which first adds the data coming from the API to the `rain data store` and then renders the weather dashboard.

#### MobX store:  src/store/rain-data-store.ts

The rain data store houses the state that is modified and shared between all the components. It is first initialized with the data coming from the API and the minimum values for pressure and temperature.

#### Data model: src/model/model.ts

Here the morphic package from effect-ts is used to model the data coming form the API, and make ADT manipulation easy. This package allow us to equip the types with useful operators to develop around them.






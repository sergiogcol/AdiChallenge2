import {} from "../../prelude"
import { tag } from "@effect-ts/core/Has"
import * as Sy from "@effect-ts/core/Sync"
import * as Sl from "@effect-ts/core/Sync/Layer"
import type { _A } from "@effect-ts/core/Utils"
import { matchTag } from "@effect-ts/core/Utils"
import { observer } from "mobx-react"
import React from "react"
import * as State from "./state"
import { RainfallAmount } from "../../model"
import PressureSlider from "../Pressure-slider/pressure-slider"
import { LiveBarChatValues } from "../../bar-chart-values"

export const makeHome = Sy.gen(function* (_) {
  const { state } = yield* _(State.HomeState)

  function Init() {
    return <div>Init</div>
  }

  function Done({ data }: { data: readonly RainfallAmount[] }) {
    if (data.length > 0) {
      const values = data[0]
      return (
        <>
          <PressureSlider />
        </>
      )
    }
    return <div>Done</div>
  }

  function Loading() {
    return <div>Loading</div>
  }

  function Error({
    error
  }: {
    error: State.StateError<typeof state> | State.Interrupted
  }) {
    return error["|>"](
      matchTag({
        DecodeError: () => <div>something wrong with the payload decoding</div>,
        HttpError: () => <div>something wrong with the http request</div>,
        JsonError: () => <div>something wrong with the json decoding</div>,
        Interrupted: () => <div>the http request was interrupted</div>
      })
    )
  }

  return observer(() => {
   /*  React.useEffect(() => {
      state.current["|>"](
        onAdtElement("Init", () => {
          next()
        })
      )
    }, []) */

    return state.current["|>"](
      matchTag({
        Done: ({ value }) => <Done data={value} />,
        Error: ({ error }) => <Error error={error} />,
        Init: () => <Init />,
        Interrupted: (error) => <Error error={error} />,
        Loading: () => <Loading />
      })
    )
  })
})

export interface Home extends _A<typeof makeHome> {}
export const Home = tag<Home>()

export const LiveHome = Sl.fromSync(Home)(makeHome)
  ["<+<"](State.LiveHomeState)
  ["<+<"](LiveBarChatValues)

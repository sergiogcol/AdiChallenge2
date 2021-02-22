import {} from "../prelude"
import { runPromiseExit } from "@effect-ts/core/Async"
import * as Sy from "@effect-ts/core/Sync"
import * as Sl from "@effect-ts/core/Sync/Layer"
import type { NextPage } from "next"
import { BarChartValues } from "../bar-chart-values"

import { Home, LiveHome } from "../components/Home"
import { HomeState } from "../components/Home/state"

export const { HomePage, getBarChartValues } = Sy.gen(function* (_) {
  const { getBarChartValues } = yield* _(BarChartValues)
  const HomeComponent = yield* _(Home)
  const { propagateExit } = yield* _(HomeState)

  const NextPage: NextPage<{
    initial: Parameters<typeof propagateExit>[0]
  }> = ({ initial }) => {
    propagateExit(initial)
    return <HomeComponent />
  }

  return {
    HomePage: NextPage,
    getBarChartValues
  }
})
  ["|>"](Sl.provideSyncLayer(LiveHome))
  ["|>"](Sy.run)

HomePage.getInitialProps = async () => {
  const initial = await runPromiseExit(getBarChartValues())
  return {
    initial
  }
}

export default HomePage

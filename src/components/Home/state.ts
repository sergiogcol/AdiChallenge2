import {} from "../../prelude";
import * as As from "@effect-ts/core/Async";
import { tag } from "@effect-ts/core/Has";
import * as Sy from "@effect-ts/core/Sync";
import * as Sl from "@effect-ts/core/Sync/Layer";
import type { _A, _E } from "@effect-ts/core/Utils";
import { matchTag } from "@effect-ts/core/Utils";
import { observable } from "mobx";
import { RainfallAmount } from "../../model";
import { BarChartValues } from "../../bar-chart-values";

export class Done<A> {
  readonly _tag = "Done";
  constructor(readonly value: A) {}
}

export class Init {
  readonly _tag = "Init";
}

export class Loading {
  readonly _tag = "Loading";
}

export class Interrupted {
  readonly _tag = "Interrupted";
}

export class Error<E> {
  readonly _tag = "Error";
  constructor(readonly error: E) {}
}

export interface State<E, A> {
  current: Init | Loading | Error<E> | Done<A> | Interrupted;
}

export const makeHomeSate = Sy.gen(function* (_) {
  const { getBarChartValues } = yield* _(BarChartValues);
  const state = observable(<
    State<_E<ReturnType<typeof getBarChartValues>>, readonly RainfallAmount[]>
  >{ current: new Init() });

  function propagateExit(
    ex: As.Exit<
      _E<ReturnType<typeof getBarChartValues>>,
      readonly RainfallAmount[]
    >
  ) {
    ex["|>"](
      matchTag({
        Success: ({ a }) => {
          state.current = new Done(a);
        },
        Failure: ({ e }) => {
          state.current = new Error(e);
        },
        Interrupt: () => {
          state.current = new Interrupted();
        },
      })
    );
  }

  return {
    state,
    propagateExit,
  };
});

export interface HomeState extends _A<typeof makeHomeSate> {}

export const HomeState = tag<HomeState>();

export const LiveHomeState = Sl.fromSync(HomeState)(makeHomeSate);

export type StateError<S extends State<any, any>> = [S] extends [
  State<infer E, infer A>
]
  ? E
  : never;

import * as As from "@effect-ts/core/Async";
import { tag } from "@effect-ts/core/Has";
import * as Sy from "@effect-ts/core/Sync";
import * as Sl from "@effect-ts/core/Sync/Layer";
import type { _A } from "@effect-ts/core/Utils";

import { Http, LiveHttp } from "./http";
import { decodeRainfallAmountArray } from "./model";

export const makeBarChatValues = Sy.gen(function* (_) {
  const { getJson } = yield* _(Http);

  return {
    getBarChartValues: () =>
      As.gen(function* (_) {
        const res = yield* _(
          getJson(
            "http://private-4945e-weather34.apiary-proxy.com/weather34/rain"
          )
        );
        return yield* _(decodeRainfallAmountArray(res));
      }),
  };
});

export interface BarChartValues extends _A<typeof makeBarChatValues> {}

export const BarChartValues = tag<BarChartValues>();

export const LiveBarChatValues = Sl.fromSync(BarChartValues)(makeBarChatValues)[
  "<<<"
](LiveHttp);

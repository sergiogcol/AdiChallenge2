import * as M from "@effect-ts/morphic";
import * as D from "@effect-ts/morphic/Decoder";

const RainfallAmount_ = M.make((F) =>
  F.interface({
    request: F.string(),
    days: F.array(F.interface({ day: F.number(), amount: F.number() })),
  })
);

export interface RainfallAmount extends M.AType<typeof RainfallAmount_> {}
export interface RainfallAmountRaw extends M.EType<typeof RainfallAmount_> {}

export const RainfallAmount = M.opaque<RainfallAmountRaw, RainfallAmount>()(
  RainfallAmount_
);

export const decodeRainfallAmount = D.decoder(RainfallAmount).decode;
export const decodeRainfallAmountArray = D.decoder(
  M.make((F) => F.array(RainfallAmount(F)))
).decode;

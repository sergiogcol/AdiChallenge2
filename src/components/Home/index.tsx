import {} from "../../prelude";
import { tag } from "@effect-ts/core/Has";
import * as Sy from "@effect-ts/core/Sync";
import * as Sl from "@effect-ts/core/Sync/Layer";
import type { _A } from "@effect-ts/core/Utils";
import { matchTag } from "@effect-ts/core/Utils";
import { observer } from "mobx-react";
import React from "react";
import * as State from "./state";
import { RainfallAmount } from "../../model/model";
import RangeSlider from "../range-slider/range-slider";
import { LiveBarChatValues } from "../../data/bar-chart-values";
import { RainDataStore } from "../../store/rain-data-store";
import RainChanceChart from "../rain-chance-chart/rain-chance-chart";
import styled from "styled-components";
import RainFallChart from "../rainfall-chart/rainfall-chart";

const Styles = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  font-family: Arial, sans-serif;
`;
const MainTitle = styled.h1`
  text-align: center;
  color: #f47560;
  text-transform: uppercase;
  height: 10%;
  margin: 0;
  padding-top: 30px;
`;
const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: space-evenly;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const makeHome = Sy.gen(function* (_) {
  const { state } = yield* _(State.HomeState);

  function Init() {
    return <div>Init</div>;
  }

  const Done = observer(({ data }: { data: readonly RainfallAmount[] }) => {
    if (data.length > 0) {
      const values = data[0];
      values.days.forEach((day) => RainDataStore.addDay(day));
      return (
        <Styles>
          <MainTitle>weather service dashboard</MainTitle>
          <Container>
            <Box>
              <RangeSlider
                rainDataStore={RainDataStore}
                isPressureComp={true}
                color="#61cdbb"
              />
              <RangeSlider
                rainDataStore={RainDataStore}
                isPressureComp={false}
                color="#d62728"
              />
            </Box>
            <Box>
              <RainFallChart rainDataStore={RainDataStore} />
              <RainChanceChart rainDataStore={RainDataStore} />
            </Box>
          </Container>
        </Styles>
      );
    }
    return <div>Done</div>;
  });

  function Loading() {
    return <div>Loading Data</div>;
  }

  function Error({
    error,
  }: {
    error: State.StateError<typeof state> | State.Interrupted;
  }) {
    return error["|>"](
      matchTag({
        DecodeError: () => <div>something wrong with the payload decoding</div>,
        HttpError: () => <div>something wrong with the http request</div>,
        JsonError: () => <div>something wrong with the json decoding</div>,
        Interrupted: () => <div>the http request was interrupted</div>,
      })
    );
  }

  return observer(() => {
    return state.current["|>"](
      matchTag({
        Done: ({ value }) => <Done data={value} />,
        Error: ({ error }) => <Error error={error} />,
        Init: () => <Init />,
        Interrupted: (error) => <Error error={error} />,
        Loading: () => <Loading />,
      })
    );
  });
});

export interface Home extends _A<typeof makeHome> {}
export const Home = tag<Home>();

export const LiveHome = Sl.fromSync(Home)(makeHome)
  ["<+<"](State.LiveHomeState)
  ["<+<"](LiveBarChatValues);

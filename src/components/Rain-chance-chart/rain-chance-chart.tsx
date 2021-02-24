import { ResponsiveLine, Serie } from "@nivo/line";
import { observer } from "mobx-react";
import { RainDataStoreImpl } from "../../rain-data-store";
import styled from "styled-components";
import { pipe } from "@effect-ts/system/Function";
import { map } from "@effect-ts/system/Array";

const Styles = styled.div`
  width: 100%;
  height: 45%;
`;
interface RainChanceChartProps {
  rainDataStore: RainDataStoreImpl;
}

const RainChanceChart: React.FC<RainChanceChartProps> = observer(
  ({ rainDataStore }) => {
    const chanceOfRain = (
      pressure: number,
      temperature: number,
      amount: number
    ): { [key: string]: number } => {
      const score =
        Math.log(amount + 1) *
        Math.log(pressure - 929) *
        Math.log(temperature - 9);
      const mean = Math.min(Math.max(score, 0), 100);
      const upper_bound = Math.min(1.5 * mean, 100);
      const lower_bound = Math.max(0.5 * mean, 0);
      return {
        "Lower Bound": lower_bound,
        Mean: mean,
        "Upper Bound": upper_bound,
      };
    };

    const rainChanceData = pipe(
      [{ id: "Lower Bound" }, { id: "Mean" }, { id: "Upper Bound" }],
      map((val) => ({
        id: val.id,
        color: "hsl(64, 70%, 50%)",
        data: pipe(
          rainDataStore.days,
          map((day) => {
            const dayChanceOfRain = chanceOfRain(
              rainDataStore.pressure,
              rainDataStore.temperature,
              day.amount
            );
            return {
              x: `Day ${day.day}`,
              y: dayChanceOfRain[val.id],
            };
          })
        ),
      }))
    );

    return (
      <Styles>
        <ResponsiveLine
          data={(rainChanceData as unknown) as Serie[]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Days",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Probability Of Rain",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          curve="linear"
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -30,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 100,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Styles>
    );
  }
);

export default RainChanceChart;

import { ResponsiveBar } from "@nivo/bar";
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

const RainFallChart: React.FC<RainChanceChartProps> = observer(
  ({ rainDataStore }) => {
    const rainFallData = pipe(
      rainDataStore.days,
      map((day) => {
        return {
          Day: `Day ${day.day}`,
          "Amount (l/m2)": day.amount,
          "Amount (l/m2)Color": "hsl(307, 70%, 50%)",
        };
      })
    );

    return (
      <Styles>
        <ResponsiveBar
          data={rainFallData as object[]}
          keys={["Amount (l/m2)"]}
          indexBy="Day"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Days",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Rainfall Amount (l/m2)",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </Styles>
    );
  }
);

export default RainFallChart;

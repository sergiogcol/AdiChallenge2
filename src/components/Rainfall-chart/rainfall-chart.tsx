import { ResponsiveBar } from "@nivo/bar";
import { observer } from "mobx-react";
import { RainDataStoreImpl } from "../../rain-data-store";
import styled from "styled-components";

const Styles = styled.div`
  width: 100%;
  height: 45%;
`;

interface RainChanceChartProps {
  rainDataStore: RainDataStoreImpl;
}

const RainFallChart: React.FC<RainChanceChartProps> = observer(
  ({ rainDataStore }) => {
    const rainFallData: object[] = [];
    rainDataStore.days.forEach((day) => {
      const dayRainFall = {
        Day: `Day ${day.day}`,
        "Amount (l/m2)": day.amount,
        "Amount (l/m2)Color": "hsl(168, 70%, 50%)",
      };
      rainFallData.push(dayRainFall);
    });

    return (
      <Styles>
        <ResponsiveBar
          data={rainFallData}
          keys={["Amount (l/m2)"]}
          indexBy="Day"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
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
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </Styles>
    );
  }
);

export default RainFallChart;

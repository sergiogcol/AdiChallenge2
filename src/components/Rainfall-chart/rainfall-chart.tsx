import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { RainDataStoreImpl } from "../../rain-data-store";

const Styles = styled.div`
  width: 800px;
  height: 250px;
  display: flex;
  justify-content: space-evenly;
  .numbers {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 100%;
  }

  .numbers li {
    list-style: none;
    height: 20%;
    position: relative;
  }

  .numbers span {
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    right: 10px;
    color: black;
  }

  .bars {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    background: #555;
    margin: 0;
    padding: 0;
    width: 90%;
    height: 100%;
    box-shadow: 0 0 10px 0 #555;
    border-radius: 5px;
  }

  .bars li {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 100px;
    height: 300px;
  }

  .bars span {
    width: 100%;
    text-align: center;
    color: black;
  }
`;

interface BarStyleProps {
  height: number;
}
const BarStyle = styled.div`
  background: #17c0eb;
  width: 50px;
  bottom: 0;
  margin-left: 25px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(23, 192, 235, 0.5);
  height: ${(props: BarStyleProps) => String(props.height)}px;
`;

interface RainfallChartProps {
  rainDataStore: RainDataStoreImpl;
}

const RainfallChart: React.FC<RainfallChartProps> = observer(
  ({ rainDataStore }) => {
    return (
      <Styles>
        <ul className="numbers">
          <li>
            <span>200</span>
          </li>
          <li>
            <span>150</span>
          </li>
          <li>
            <span>100</span>
          </li>
          <li>
            <span>50</span>
          </li>
          <li>
            <span>0</span>
          </li>
        </ul>
        <ul className="bars">
          {rainDataStore.days.map((day) => (
            <li>
              <BarStyle key={day.day} height={day.amount} />
              <span>Day {day.day}</span>
            </li>
          ))}
        </ul>
      </Styles>
    );
  }
);

export default RainfallChart;

import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import { RainDataStoreImpl } from "../../rain-data-store";

const sliderThumbStyles = (props: React.CSSProperties) => `
  width: 35px;
  height: 35px;
  background: ${props.color};
  cursor: pointer;
  border-radius: 35px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 1.2rem;
    margin-left: 2.5%;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    margin-left: 5%;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props: React.CSSProperties) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props: React.CSSProperties) => sliderThumbStyles(props)}
    }
  }
`;

interface RangeSliderProps {
  rainDataStore: RainDataStoreImpl;
  isPressureComp: boolean;
  color: string;
}

const RangeSlider: React.FC<RangeSliderProps> = observer(
  ({ rainDataStore, isPressureComp, color }) => {
    const [value, setValue] = useState<number>(isPressureComp ? 970 : 10);
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(parseInt(e.target.value));
      isPressureComp
        ? rainDataStore.modifyPressure(parseInt(e.target.value))
        : rainDataStore.modifyTemperature(parseInt(e.target.value));
    };
    console.log(rainDataStore.pressure, rainDataStore.temperature);
    return (
      <>
        <h2 style={{ textAlign: "center", color: "#f47560" }}>
          {isPressureComp ? "Pressure (hPa)" : "Temperature (°C)"}
        </h2>
        <Box color={color}>
          <input
            type="range"
            min={isPressureComp ? 970 : 10}
            max={isPressureComp ? 1030 : 35}
            value={value}
            className="slider"
            onChange={handleOnChange}
          />
          <div className="value">{value}</div>
        </Box>
      </>
    );
  }
);

export default RangeSlider;

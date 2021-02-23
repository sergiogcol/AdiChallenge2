import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import { RainDataStoreImpl } from "../../rain-data-store";

const sliderThumbStyles = (props: React.CSSProperties) => `
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
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
    const initialPressure = (970 + 1030) / 2;
    const initialTemperature = (35 + 10) / 2;
    const [value, setValue] = useState<number>(isPressureComp ? initialPressure : initialTemperature);
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(parseInt(e.target.value));
      isPressureComp
        ? rainDataStore.modifyPressure(parseInt(e.target.value))
        : rainDataStore.modifyTemperature(parseInt(e.target.value));
    };
    return (
      <Styles opacity={value > 10 ? value / 255 : 0.1} color={color}>
        <input
          type="range"
          min={isPressureComp ? 970 : 10}
          max={isPressureComp ? 1030 : 35}
          value={value}
          className="slider"
          onChange={handleOnChange}
        />
        <div className="value">{value}</div>
      </Styles>
    );
  }
);

export default RangeSlider;

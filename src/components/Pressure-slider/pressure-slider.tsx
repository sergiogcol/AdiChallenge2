import React, { useState } from "react";
import styled from "styled-components";

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

const PressureSlider: React.FC = () => {
  const [value, setValue] = useState((970 + 1030) / 2);
  const handleOnChange:  React.ChangeEventHandler<HTMLInputElement> = (e) => setValue(parseInt(e.target.value));
  return (
    <Styles opacity={value > 10 ? value / 255 : 0.1} color={"#0074D9"}>
      <input
        type="range"
        min={970}
        max={1030}
        value={value}
        className="slider"
        onChange={handleOnChange}
      />
      <div className="value">{value}</div>
    </Styles>
  );
};

export default PressureSlider;

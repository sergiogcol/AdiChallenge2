import React from "react"

const PressureSlider: React.FC = () => {
  return (
    <div className="pressure">
      <input type="range" min="970" max="1030" id="slider" />
      <div id="selector">
        <div id="selectButton" />
      </div>
    </div>
  )
}

export default PressureSlider

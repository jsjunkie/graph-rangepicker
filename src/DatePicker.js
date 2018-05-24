import React, { Component } from "react";
import './DatePicker.css';

export default class DatePicker extends Component {
  constructor() {
    super();

    this.state = {
      bars: [20, 30, 10, 33, 22]

    }
  }

  render() {
    const areaLength = this.state.bars.length * 20;
    return (
      <div>
        <div className="graph">
          {this.state.bars.map((bar, i) => <div key={i} style={{height: bar, left:20*i, bottom: 0}} className="bar bar-light"></div>)}
          <div className="box" style={{ marginLeft: areaLength, width: areaLength }}></div>
          {this.state.bars.map((bar, i) => <div key={i} style={{ height: bar, left: areaLength + 20 * i, bottom: 0 }} className="bar bar-dark"></div>)}
          {this.state.bars.map((bar, i) => <div key={i} style={{ height: bar, left: areaLength * 2 + 20 * i, bottom: 0 }} className="bar bar-light"></div>)}
        </div>
        <div className="scroll">
          <div className="slider" style={{ left: areaLength - 20, top: -5 }}>||</div>
          <div className="area" style={{width: areaLength, left: areaLength}}></div>
          <div className="slider" style={{ left: areaLength * 2, top: -5}}>||</div>
        </div>
      </div>
    );
  }
}

import React from 'react'
import { IndexLink, Link } from 'react-router'
import Interpreter from '../Interpreter'
import Samples from './samples'

console.log('SAMPLES', Samples);

class CodeArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      code: props.code
      // sampleCode: props.sampleCode
    };

    console.log("Sample", this.state);
  }

  execute() {
    var value = Interpreter(this.state.code);
    this.setState({
      output: value
    });
  }

  clearOutput() {
    this.setState({ output: '' });
  }

  setCode(name) {
    this.setState({ code: Samples[name]});
  }

  render() {
    return (
      <div className="code-area-container">
        <div className="input-container">
          <textarea className="code-area" value={this.state.code} onChange={(event) => this.setState({code: event.target.value})}></textarea>
          <div className="output-area">{this.state.output}</div>
        </div>
        <div className="button-row">
          <button type="button" className="btn btn-success run-button" onClick={() => this.execute()}>Run</button>
          <button type="button" className="btn btn-default clear-button" onClick={() => this.clearOutput()}>Clear Output</button>
        </div>
      </div>
    );
  }
};

// <button type="button" className="btn btn-default clear-button" onClick={() => this.setCode('hello')}>Hello World!</button>
export default CodeArea

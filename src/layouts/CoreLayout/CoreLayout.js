import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import CodeArea from '../../components/CodeArea'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      sampleCode: ''
    };

    this.sampleClick = this.sampleClicked.bind(this);
  }

  sampleClicked(sampleName) {
    console.log('SAMPLE CLICKED', this);
    this.setState({ sampleCode: sampleName});
  }

  render() {
    return (
      <div>

        <Navbar sampleClicked={this.sampleClicked} />
        <div className='container text-center'>
          <Header />

          <CodeArea sampleCode={this.state.sampleCode} />
        </div>
      </div>
    )
  }
};

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};



// CoreLayout.handleSampleChange = (code) => {
//
// };

export default CoreLayout

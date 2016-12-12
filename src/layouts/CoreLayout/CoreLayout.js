import React from 'react'
import TopNav from '../../components/Navbar'
import Header from '../../components/Header'
import CodeArea from '../../components/CodeArea'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TopNav sampleClicked={(sample) => { this.refs.codeArea.setCode(sample); }} />
        <div className='container text-center'>
          <Header />

          <CodeArea ref="codeArea" />
        </div>
      </div>
    )
  }
};

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout

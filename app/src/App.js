import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './index.css';

const anchors = ['firstPage', 'secondPage', 'thirdPage'];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    // navigat
    sectionsColor={['#23272E', '#1B1E24', '#1D2126', '#23272E']}
    onLeave={(origin, destination, direction) => {}}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <div className='section'>
            <h3>Section 1</h3>
          </div>
          <div className='section'>
            <h3>Section 2</h3>
          </div>
          <div className='section'>
            <h3>Section 3</h3>
          </div>
          <div className='section'>
            <h4>Section 4</h4>
          </div>
        </div>
      );
    }}
  />
);
export default App;

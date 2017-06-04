import React from 'react';

function SplitPanePram(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function SplitPane() {
  return (
    <SplitPanePram
      left={<BoxOne />}
      right={<BoxTwo />}
    />
  );
}

function BoxOne() {
  return <h3>Box One</h3>
}

function BoxTwo() {
  return <h3>Box Two</h3>
}

export default SplitPane;

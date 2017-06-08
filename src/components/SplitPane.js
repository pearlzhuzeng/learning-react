import React from 'react'

const SplitPanePram = props => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

const SplitPane = () => {
  return <SplitPanePram left={<BoxOne />} right={<BoxTwo />} />
}

const BoxOne = () => {
  return <h3>Box One</h3>
}

const BoxTwo = () => {
  return <h3>Box Two</h3>
}

export default SplitPane

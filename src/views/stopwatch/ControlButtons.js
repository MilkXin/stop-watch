import React from 'react'
import PropTypes from 'prop-types'

const ControlButtons = ({ activated, onStart, onPause, onReset, onSplit }) => {
    // const { activated, onStart, onPause, onReset, onSplit } = props
    if (activated) {
        return (
            <div>
                <button onClick={onSplit}>计次</button>
                <button onClick={onPause}>停止</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={onReset}>复位</button>
                <button onClick={onStart}>启动</button>
            </div>
        )
    }
}

export default ControlButtons

ControlButtons.propTypes = {
    activated: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}
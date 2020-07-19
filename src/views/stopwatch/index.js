import React, { Component, Fragment } from 'react'
import MajorClock from './MajorClock'
import ControlButtons from './ControlButtons'
import SplitTimes from './SplitTimes'

export default class StopWatch extends Component {
    state = {
        isStarted: false,
        startTime: 0,
        currentTime: 0,
        splits: []
    }

    onStart = () => {
        this.setState({
            isStarted: true,
            startTime: (new Date()).getTime(),
            currentTime: (new Date()).getTime(),
        });

        this.intervalHandle = setInterval(() => {
            this.setState({ currentTime: (new Date()).getTime() })
        }, 1000 / 60);
    }

    onPause = () => {
        clearInterval(this.intervalHandle)
        this.setState({
            isStarted: false,
        });
    }

    onSplit = () => {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        });
    }

    onReset = () => {
        this.setState({
            startTime: 0,
            currentTime: 0,
            splits: [],
        });
    }

    render() {
        const { isStarted, startTime, currentTime, splits } = this.state

        return (
            <Fragment>
                <MajorClock milliseconds={currentTime - startTime} />
                <ControlButtons
                    activated={isStarted}
                    onStart={this.onStart}
                    onPause={this.onPause}
                    onSplit={this.onSplit}
                    onReset={this.onReset}
                />
                <SplitTimes value={splits} />
            </Fragment>
        )
    }
}

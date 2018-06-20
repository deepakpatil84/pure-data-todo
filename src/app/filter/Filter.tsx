import * as React from 'react'
import * as PureData from 'pure-data'
import AppData, { Filter as F } from '../App.data'
export default class Filter extends PureData.Component<AppData>{

    constructor(props: any, context?: any) {
        super(props, context)
        this.handleAll = this.handleAll.bind(this)
        this.handleActive = this.handleActive.bind(this)
        this.handleCompleted = this.handleCompleted.bind(this)
    }
    handleAll() {
        this.props.data.set({ filter: F.ALL })
    }
    handleCompleted() {
        this.props.data.set({ filter: F.COMPLETED })
    }
    handleActive() {
        this.props.data.set({ filter: F.ACTIVE })
    }
    render() {
        let data = this.props.data
        return <div>
            Filter:
            <button disabled={data.filter === F.ALL} onClick={this.handleAll}>All</button>
            <button disabled={data.filter === F.ACTIVE} onClick={this.handleActive}>Active</button>
            <button disabled={data.filter === F.COMPLETED} onClick={this.handleCompleted}>Completed</button>
        </div>
    }
}

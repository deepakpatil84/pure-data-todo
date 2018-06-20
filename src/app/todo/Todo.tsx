
import * as PureData from 'pure-data'
import * as React from 'react'
import TodoData from './Todo.data'


export default class Todo extends PureData.Component<TodoData>{
    constructor(props:any,context?:any){
        super(props,context)
        this.toggleCompleted = this.toggleCompleted.bind(this)
    }
    toggleCompleted(){
        this.props.data.set({completed:!this.props.data.completed})
    }
    render(): JSX.Element {
        let data = this.props.data
        return <div style={{textDecoration:data.completed ? 'line-through' : 'none'}}
            onClick={this.toggleCompleted}
            >
            {data.text}
        </div>
    }
}
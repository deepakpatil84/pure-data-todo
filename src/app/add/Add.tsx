import * as PureData from 'pure-data'
import * as React from 'react'
import AppData from '../App.data'
export default class Add extends PureData.Component<AppData>{
    private input: HTMLInputElement | null;
    constructor(props:any,context?:any){
        super(props,context)
        this.handleAdd =this.handleAdd.bind(this)
    }
    handleAdd(){
        if(this.input != null){
            if(this.input.value){
                this.props.data.addTodo(this.input.value)
            }
        }
    }
    render() {
        return <div>
            <input ref={(ref) => this.input = ref} />
            <button onClick={this.handleAdd}>Add</button>
        </div>
    }
}

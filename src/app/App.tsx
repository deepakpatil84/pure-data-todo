

import Add from './add/Add'
import AppData,{Filter as F} from './App.data'
import Filter from './filter/Filter'
import * as PureData from 'pure-data'
import * as React from 'react'
import Todo from './todo/Todo'

import './App.css'


export default class App extends PureData.Component<AppData>{

    render(): JSX.Element {
        const data = this.props.data
        const todos = data.todos.filter((todo)=>{
            return data.filter === F.ALL ? true :
                data.filter === F.COMPLETED ?
                    todo.completed : !todo.completed
        }).map((todo) => {
            return <Todo parent={this} data={todo} key={todo.id}>{todo.text}</Todo>
        })
        return <div>
            <h1>{data.title}</h1>
            <Add parent={this} data={data} />
            <Filter parent={this} data={data} />
            <div>{todos}</div>
        </div>
    }
}
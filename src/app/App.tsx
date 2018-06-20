
import * as PureData from 'pure-data'
import AppData,{Filter as F} from './App.data'
import * as React from 'react'
import Add from './add/Add'
import Todo from './todo/Todo'
import Filter from './filter/Filter'
import './App.css'


export default class App extends PureData.Component<AppData>{

    render(): JSX.Element {
        let data = this.props.data
        let todos = data.todos.filter((todo)=>{
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
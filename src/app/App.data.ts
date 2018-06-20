import * as PureData from 'pure-data'
import Todo from './todo/Todo.data'
export enum Filter{
    ALL, ACTIVE, COMPLETED
}
export default class AppData extends PureData.Data {

    title: string = 'Todo List'
    todos: Todo[] = []
    filter: Filter = Filter.ALL

    addTodo(text: string) {
        this.todos.push(new Todo(text))
        this.setModified(true)
    }
}
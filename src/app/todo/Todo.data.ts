import * as PureData from 'pure-data'

export default class Todo extends PureData.Data {
    private static counter = 0;

    id: number
    text: string
    completed: boolean

    constructor(text: string) {
        super()
        this.id = ++Todo.counter
        this.text = text
        this.completed = false
    }
}
import AppData from './App.data'
import App from './App'
import * as React from 'react'
const appData: AppData = new AppData();

export default class Root extends React.PureComponent {
    private waitingForMoreUpdates = false;
    constructor(props: any, context: any) {
        super(props, context)
        this.onDataUpdate = this.onDataUpdate.bind(this)
    }
    onDataUpdate() {
        if (this.waitingForMoreUpdates === false) {
            this.waitingForMoreUpdates = true
            setTimeout(() => {
                this.forceUpdate()
                this.waitingForMoreUpdates = false
            }, 5)
        }
    }
    render() {
        return <div className="App">
            <header className="App-header">
                <img src={'./logo.svg'} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to pure-data-todo app</h1>
            </header>
            <div className="App-intro">
                <App parent={null} data={appData} onUpdate={this.onDataUpdate} />
            </div>
        </div>
    }
}
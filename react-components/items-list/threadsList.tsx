import * as React from 'react';
import * as ReactDOM from 'react-dom';


export class ThreadsList extends React.Component<any, any> {

    state;

    static initialize(elemId) {
        ReactDOM.render(<ThreadsList/>, document.getElementById(elemId));
    }

    constructor(props) {
        super(props);
        this.state = {loading: true};
        console.log('Tests');
    }

    componentDidMount() {
        console.log('Mounted');
    }

    public toggleLoading = () => {
        console.log('Toggle loading');
        this.setState((prevState, props) => {
            console.log(this.state.loading);
            return {loading: !this.state.loading}
        });
    }

    render() {
        return (<div>
            <p>{this.props['name']}</p>
            <p>Loading: {this.state.loading.toString()}</p>
            <button onClick={this.toggleLoading}>Toggle loading</button>
        </div>);
    }
}
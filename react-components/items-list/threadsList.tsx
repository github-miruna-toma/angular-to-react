import * as React from 'react';


export class ThreadsList extends React.Component<any, any> {

    state;

    constructor(props) {
        super(props);
        this.state = {loading: true};
        console.log('Tests');
    }

    componentDidMount() {
        console.log('Mounted');
    }

    public toggleLoading = () => {
        this.setState((prevState, props) => {
            console.log(this.state.loading);
            return {loading: !this.state.loading}
        });
    }

    render() {
        return (<div>
            <p>{this.props['name']}</p>
            <p>Loading: {this.state.loading}</p>
            <button onClick={this.toggleLoading}>Toggle loading</button>
        </div>);
    }
}
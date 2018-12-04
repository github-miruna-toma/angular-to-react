import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (<h1>Hello {this.props['name']}!</h1>);
    }

  componentDidMount() {
    console.log('Component mounted');
  }
}

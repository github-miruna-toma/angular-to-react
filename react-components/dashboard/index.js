class Dashboard extends React.Component {

    static initialize(name, elemId) {
        ReactDOM.render(<h1>Hello, {name}</h1>, document.getElementById(elemId));
    }

    render(name) {
        return <h1>Hello, {name}</h1>;
    }

    componentDidMount() {
        console.log('Component mounted');
    }
}

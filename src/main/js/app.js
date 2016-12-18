'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
// end::vars[]

// tag::app[]
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {block: 1};
    }

    componentDidMount() {
     /*   client({method: 'GET', path: '/api/employees'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        });*/
        this.setState({block: 5})
    }

    render() {
        return (
            <Hello blockNumber={this.state.block}/>
        )
    }
}

class Hello extends React.Component {
    render() {
        /*var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
        );*/
        return (
            <h1>Ohai {this.props.blockNumber}</h1>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);

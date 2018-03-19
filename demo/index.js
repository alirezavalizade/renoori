import React from 'react';
import ReactDOM from 'react-dom';
import Renoori from '../src/index';

const Title = Renoori.h1({
    color: 'red',
    'font-size': 40,
    border: '1px solid red',
    padding: 10,
    margin: 100
});

const Title2 = Renoori.h1({
    color: 'blue',
    margin: 100
});

const Title3 = Renoori.h1({
    color: 'gray',
    'font-size': 70,
    margin: 100
});

const Title4 = Renoori.h1({
    margin: 100,
    border: '2px solid blue',
    padding: 40
});

const Section = Renoori.section({
    color: 'yellow'
});

class App extends React.PureComponent {
    state = {
        counter: 0
    };
    
    render() {
        const { counter } = this.state;
        
        return (
            <div>
                <button onClick={() => this.setState({ counter: counter + 1 })}>+</button>
                <button onClick={() => this.setState({ counter: counter - 1 })}>-</button>
                <Title>counter: {counter}</Title>
                <Title2>Hello world !</Title2>
                <Title3>Hello world !</Title3>
                <Section>
                    <Title4>Hello world !</Title4>
                </Section>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
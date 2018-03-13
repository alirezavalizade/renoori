import React from 'react';
import ReactDOM from 'react-dom';
import Renoori from '../src/index';

const Title = Renoori.h1({
    color: 'red',
    'font-size': 10,
    border: '1px solid red',
    padding: 10,
    margin: 100
});

const Title2 = Renoori.h1({
    color: 'blue'
});

const Title3 = Renoori.h1({
    color: 'gray',
    'font-size': 70
});

const Title4 = Renoori.h1({
    color: 'yellow'
});

const App = () => (
    <div>
        <Title>Hello world !</Title>
        <Title2>Hello world !</Title2>
        <Title3>Hello world !</Title3>
        <Title4>Hello world !</Title4>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
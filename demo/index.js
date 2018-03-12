import React from 'react';
import ReactDOM from 'react-dom';
import Noori from '../src/index';

const elements = Noori();
const Title = elements.h1({
    color: 'red',
    'font-size': 10
});

const Title2 = elements.h1({
    color: 'blue'
});

const App = () => (
    <div>
        <Title>Hello world !</Title>
        <Title2>Hello world !</Title2>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
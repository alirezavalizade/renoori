import React from 'react';
import ReactDOM from 'react-dom';
import domElemntsGenerator from '../src/index';

const elements = domElemntsGenerator();
const Title = elements.h1({
    color: 'red'
});
const App = () => (
    <div>
        <Title>Hello world !</Title>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
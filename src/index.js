import React from 'react';
import ReactDOM from 'react-dom';

import Placeholder from './components/placeholderComponent.jsx';

import '../style/main.scss';

const App = () => {

    return(
        <div>
            <Placeholder />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'));

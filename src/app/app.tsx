import React from 'react';
import { Autocomplete } from './components/autocomplete/autocomplete.component';
import './app.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <Autocomplete
                title={'Component for autocomplete'}
                predefinedList={[
                    '#ABC abc a-b-c',
                    '50-560 Example City',
                    'abba@gmail.com',
                    'amber',
                    'amberaanjnkjafa',
                    'amberamberkkkajf',
                    'ameba',
                    'ara',
                    'kot',
                    'pies',
                    'żaba',
                    'żółw'
                ]}
            />
        </div>
    );
}

export default App;

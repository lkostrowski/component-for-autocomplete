import React from 'react';
import { Autocomplete } from './components/autocomplete/autocomplete.component';
import './app.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <Autocomplete
                title={'Component for autocomplete'}
                predefinedList={[
                    'kot',
                    'pies',
                    'żaba',
                    'żółw',
                    'ameba',
                    'amber',
                    'amberaanjnkjafa',
                    'amberamberkkkajf',
                    'ara',
                    'abba@gmail.com',
                    '50-560 Example City',
                    '#ABC abc a-b-c'
                ]}
            />
        </div>
    );
}

export default App;

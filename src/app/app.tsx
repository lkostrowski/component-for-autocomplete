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
                    'ara'
                ]}
            />
        </div>
    );
}

export default App;

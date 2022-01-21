import React from 'react';
import { MainComponentForAutocomplete } from './components/mainComponentForAutocomplete/mainComponentForAutocomplete.component';
import './app.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <MainComponentForAutocomplete
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

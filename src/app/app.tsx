import React from 'react';
import { LabelForAddedItem } from './components/labelForAddedItem/labelForAddedItem.component';
import { SuggestionsList } from './components/suggestionsList/suggestionsList.component';
import './app.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <LabelForAddedItem
                onClose={() => console.log('on close')}
                title={'added item'}
            />
            <SuggestionsList />
        </div>
    );
}

export default App;

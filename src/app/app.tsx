import React from 'react';
import { LabelForAddedItem } from './components/labelForAddedItem/labelForAddedItem.component';
import './app.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <LabelForAddedItem
                onClose={() => console.log('on close')}
                title={'added item'}
            />
        </div>
    );
}

export default App;

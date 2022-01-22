import React from 'react';
import { InputWithLabels } from '../inputWithLabels/inputWithLabels.component';
import './autocomplete.component.scss';

interface AutocompleteProps {
    title: string;
    predefinedList: Array<string>;
}

export function Autocomplete({
    title,
    predefinedList
}: AutocompleteProps): JSX.Element {
    return (
        <div className="autocomplete">
            <h1>{title}</h1>
            <InputWithLabels
                predefinedList={predefinedList}
                placeholder={'Start typing something...'}
            />
        </div>
    );
}

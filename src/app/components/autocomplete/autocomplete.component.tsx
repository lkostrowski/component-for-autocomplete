import React from 'react';
import { InputField } from '../inputField/inputField.component';
import './autocomplete.component.scss';

interface AutocompleteProps {
    predefinedList: Array<string>;
    title: string;
}

export function Autocomplete({
    predefinedList,
    title
}: AutocompleteProps): JSX.Element {
    return (
        <div className="autocomplete">
            <h1>{title}</h1>
            <InputField
                placeholder={'Start typing something...'}
                predefinedList={predefinedList}
            />
        </div>
    );
}

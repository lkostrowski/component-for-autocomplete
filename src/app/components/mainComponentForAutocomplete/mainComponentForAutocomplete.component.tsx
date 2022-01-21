import React from 'react';
import { InputFieldWithLabels } from '../inputFieldWithLabels/inputFieldWithLabels.component';
import './mainComponentForAutocomplete.component.scss';

interface MainComponentForAutocompleteProps {
    title: string;
    predefinedList: Array<string>;
}

export function MainComponentForAutocomplete({
    title,
    predefinedList
}: MainComponentForAutocompleteProps): JSX.Element {
    return (
        <div className="main-component-for-autocomplete">
            <h1>{title}</h1>
            <InputFieldWithLabels
                predefinedList={predefinedList}
                placeholder={'Start typing something...'}
            />
        </div>
    );
}

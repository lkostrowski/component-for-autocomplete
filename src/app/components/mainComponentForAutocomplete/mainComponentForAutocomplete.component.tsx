import React from 'react';
import { InputFieldWithLabels } from '../inputFieldWithLabels/inputFieldWithLabels.component';
import { SuggestionsList } from '../suggestionsList/suggestionsList.component';
import './mainComponentForAutocomplete.component.scss';

interface MainComponentForAutocompleteProps {
    title: string;
}

export function MainComponentForAutocomplete({
    title
}: MainComponentForAutocompleteProps): JSX.Element {
    return (
        <div className="main-component-for-autocomplete">
            <h1>{title}</h1>
            <InputFieldWithLabels placeholder={'Start typing something...'} />
            <SuggestionsList />
        </div>
    );
}

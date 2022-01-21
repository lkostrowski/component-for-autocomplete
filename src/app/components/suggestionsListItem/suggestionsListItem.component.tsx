import React from 'react';
import './suggestionsListItem.component.scss';

interface SuggestionsListItemProps {
    suggestion: string;
    selectedSuggestion: string;
}

export function SuggestionsListItem({
    suggestion,
    selectedSuggestion
}: SuggestionsListItemProps): JSX.Element {
    return (
        <li
            className={`suggestions-list-item ${
                suggestion === selectedSuggestion && 'selected'
            }`}
        >
            <p>{suggestion}</p>
        </li>
    );
}

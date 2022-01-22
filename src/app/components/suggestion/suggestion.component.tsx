import React from 'react';
import './suggestion.component.scss';

interface SuggestionProps {
    suggestion: string;
    selectedSuggestion: string;
}

export function Suggestion({
    suggestion,
    selectedSuggestion
}: SuggestionProps): JSX.Element {

    return (
        <li tabIndex={0}
            className={`suggestion ${
                suggestion === selectedSuggestion ? 'selected' : ''
            }`}
        >
            <p>{suggestion}</p>
        </li>
    );
}

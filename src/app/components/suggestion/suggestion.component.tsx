import React from 'react';
import './suggestion.component.scss';

interface SuggestionProps {
    suggestion: string;
    tag: string;
}

export function Suggestion({ suggestion, tag }: SuggestionProps): JSX.Element {
    return (
        <li
            tabIndex={0}
            className={`suggestion ${suggestion === tag ? 'selected' : ''}`}
        >
            <p>{suggestion}</p>
        </li>
    );
}

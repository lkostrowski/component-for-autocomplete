import React from 'react';
import './suggestionsListItem.component.scss';

interface SuggestionsListItemProps {
    suggestion: string;
}

export function SuggestionsListItem({
    suggestion
}: SuggestionsListItemProps): JSX.Element {
    return (
        <li className="suggestions-list-item">
            <p>{suggestion}</p>
        </li>
    );
}

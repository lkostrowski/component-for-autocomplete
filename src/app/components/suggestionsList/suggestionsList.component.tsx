import React from 'react';
import { SuggestionsListItem } from '../suggestionsListItem/suggestionsListItem.component';
import './suggestionsList.component.scss';

interface SuggestionsListProps {
}

export function SuggestionsList({}: SuggestionsListProps): JSX.Element {
    return (
        <ul className="suggestions-list">
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
            <SuggestionsListItem suggestion={'example suggestion'} />
        </ul>
    );
}

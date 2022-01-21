import React from 'react';
import { SuggestionsListItem } from '../suggestionsListItem/suggestionsListItem.component';
import './suggestionsList.component.scss';

interface SuggestionsListProps {
    suggestions: Array<string>;
    selectedSuggestion: string;
}

export function SuggestionsList({
    suggestions,
    selectedSuggestion
}: SuggestionsListProps): JSX.Element {
    return (
        <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
                    <SuggestionsListItem
                        key={suggestion}
                        suggestion={suggestion}
                        selectedSuggestion={selectedSuggestion}
                    />
            ))}
        </ul>
    );
}

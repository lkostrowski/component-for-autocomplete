import React, { useEffect } from 'react';
import { SuggestionsListItem } from '../suggestionsListItem/suggestionsListItem.component';
import './suggestionsList.component.scss';

interface SuggestionsListProps {
    suggestions: Array<string>;
    selectedSuggestion: string;
    onSetSelectedIndex: (selectedSuggestionIndex: number) => void;
    selectedSuggestionIndex: number;
    selectedSuggestionsList: Array<string>;
    onSetSelectedSuggestionsList: (
        selectedSuggestionsList: Array<string>
    ) => void;
}

export function SuggestionsList({
    suggestions,
    selectedSuggestion,
    onSetSelectedIndex,
    selectedSuggestionIndex,
    selectedSuggestionsList,
    onSetSelectedSuggestionsList
}: SuggestionsListProps): JSX.Element {
    useEffect(() => {}, [selectedSuggestionIndex, selectedSuggestionsList]);
    
    function onKeyDownHandler(event: any): void {
        if (event.code === 'ArrowDown') {
            const selectedIndex = selectedSuggestionIndex + 1;
            if (selectedIndex < suggestions.length) {
                onSetSelectedIndex(selectedIndex);
            }
        }
        if (event.code === 'ArrowUp') {
            const selectedIndex = selectedSuggestionIndex - 1;
            if (selectedIndex >= 0) {
                onSetSelectedIndex(selectedIndex);
            }
        }
        if (event.code === 'Enter') {
            const selected = suggestions[selectedSuggestionIndex];
            if (selectedSuggestionsList.indexOf(selected) === -1) {
                selectedSuggestionsList.push(selected);
                onSetSelectedSuggestionsList(selectedSuggestionsList);
            }
        }
    }

    return (
        <ul className="suggestions-list" onKeyDown={onKeyDownHandler}>
            {suggestions?.map((suggestion) => (
                <SuggestionsListItem
                    key={suggestion}
                    suggestion={suggestion}
                    selectedSuggestion={selectedSuggestion}
                />
            ))}
        </ul>
    );
}

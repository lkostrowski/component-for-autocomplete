import React, { useEffect } from 'react';
import { Suggestion } from '../suggestion/suggestion.component';
import './suggestions.component.scss';

interface SuggestionsProps {
    onSetSelectedIndex: (selectedSuggestionIndex: number) => void;
    onSetSelectedSuggestions: (selectedSuggestions: Array<string>) => void;
    selectedSuggestion: string;
    selectedSuggestionIndex: number | null;
    selectedSuggestions: Array<string>;
    suggestions: Array<string>;
}

export function Suggestions({
    onSetSelectedIndex,
    onSetSelectedSuggestions,
    selectedSuggestion,
    selectedSuggestionIndex,
    selectedSuggestions,
    suggestions
}: SuggestionsProps): JSX.Element {
    useEffect(() => {}, [selectedSuggestionIndex, selectedSuggestions]);

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - event: any to change
    function onKeyDownHandler(event: any): void {
        if (event.code === 'ArrowDown') {
            if (typeof selectedSuggestionIndex === 'number') {
                const selectedIndex = selectedSuggestionIndex + 1;
                if (selectedIndex < suggestions.length) {
                    onSetSelectedIndex(selectedIndex);
                }
            } else {
                selectedSuggestionIndex = 0;
                const selectedIndex = selectedSuggestionIndex;
                onSetSelectedIndex(selectedIndex);
            }
        }

        if (event.code === 'ArrowUp') {
            if (typeof selectedSuggestionIndex === 'number') {
                const selectedIndex = selectedSuggestionIndex - 1;
                if (selectedIndex >= 0) {
                    onSetSelectedIndex(selectedIndex);
                }
            }
        }

        if (event.code === 'Enter') {
            if (typeof selectedSuggestionIndex === 'number') {
                const selected = suggestions[selectedSuggestionIndex];
                if (selectedSuggestions.indexOf(selected) === -1) {
                    selectedSuggestions.push(selected);
                    onSetSelectedSuggestions(selectedSuggestions);
                    const indexToRemove = suggestions.indexOf(selected);
                    suggestions.splice(indexToRemove, 1);
                }
            }
        }
    }

    return (
        <ul
            className="suggestions"
            onKeyDown={onKeyDownHandler}
            tabIndex={suggestions.length > 1 ? 0 : -1}
        >
            {suggestions?.map((suggestion) => (
                <Suggestion
                    key={suggestion}
                    selectedSuggestion={selectedSuggestion}
                    suggestion={suggestion}
                />
            ))}
        </ul>
    );
}

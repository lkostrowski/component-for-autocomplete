import React, { useEffect } from 'react';
import { Suggestion } from '../suggestion/suggestion.component';
import './suggestions.component.scss';

interface SuggestionsProps {
    onSetSelectionIndex: (selectionIndex: number) => void;
    onSetTags: (tags: Array<string>) => void;
    tag: string;
    selectionIndex: number | null;
    tags: Array<string>;
    suggestions: Array<string>;
}

export function Suggestions({
    onSetSelectionIndex,
    onSetTags,
    tag,
    selectionIndex,
    tags,
    suggestions
}: SuggestionsProps): JSX.Element {
    useEffect(() => {}, [selectionIndex, tags]);

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - event: any to change
    function onKeyDownHandler(event: any): void {
        if (event.code === 'ArrowDown') {
            if (typeof selectionIndex === 'number') {
                selectionIndex = selectionIndex + 1;
                if (selectionIndex < suggestions.length) {
                    onSetSelectionIndex(selectionIndex);
                }
            } else {
                selectionIndex = 0;
                onSetSelectionIndex(selectionIndex);
            }
        }

        if (event.code === 'ArrowUp') {
            if (typeof selectionIndex === 'number') {
                selectionIndex = selectionIndex - 1;
                if (selectionIndex >= 0) {
                    onSetSelectionIndex(selectionIndex);
                }
            }
        }

        if (event.code === 'Enter') {
            if (typeof selectionIndex === 'number') {
                const selected = suggestions[selectionIndex];
                if (tags.indexOf(selected) === -1) {
                    tags.push(selected);
                    onSetTags(tags);
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
                    tag={tag}
                    suggestion={suggestion}
                />
            ))}
        </ul>
    );
}

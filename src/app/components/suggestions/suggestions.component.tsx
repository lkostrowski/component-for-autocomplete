import React, { MutableRefObject, useEffect, useState } from 'react';
import './suggestions.component.scss';

interface FocusedSuggestion {
    index: number;
    value: string;
}

interface SuggestionsProps {
    onSelectSuggestion: () => void;
    onSetTags: (tags: Array<string>) => void;
    tags: Array<string>;
    suggestions: Array<string>;
    suggestionsReference: MutableRefObject<HTMLElement[]>;
}

export function Suggestions({
    onSelectSuggestion,
    onSetTags,
    tags,
    suggestions,
    suggestionsReference
}: SuggestionsProps): JSX.Element {
    const [focusedSuggestion, setFocusedSuggestion] =
        useState<FocusedSuggestion | null>(null);

    useEffect(() => {
        setFocusedSuggestion({ index: 0, value: suggestions[0] });
    }, [suggestions]);

    useEffect(() => {}, [focusedSuggestion, suggestions]);

    function onKeyDownHandler(event: React.KeyboardEvent<HTMLElement>): void {
        if (event.code === 'ArrowDown') {
            if (typeof focusedSuggestion?.index === 'number') {
                const nextIndex = focusedSuggestion.index + 1;
                suggestionsReference.current[nextIndex].focus();
                setFocusedSuggestion({
                    index: nextIndex,
                    value: suggestions[nextIndex]
                });
            }
        }

        if (event.code === 'ArrowUp') {
            if (focusedSuggestion?.index) {
                const previousIndex = focusedSuggestion.index - 1;
                suggestionsReference.current[previousIndex].focus();
                setFocusedSuggestion({
                    index: previousIndex,
                    value: suggestions[previousIndex]
                });
            }
        }

        if (event.code === 'Enter') {
            if (
                focusedSuggestion &&
                tags.indexOf(focusedSuggestion.value) === -1
            ) {
                focusedSuggestion &&
                    onSetTags([...tags, focusedSuggestion.value]);
                    onSelectSuggestion();
            }
        }
    }

    return (
        <ul className="suggestions" onKeyDown={onKeyDownHandler}>
            {suggestions?.map((suggestion, i) => (
                <li
                    className="suggestion"
                    key={suggestion}
                    ref={(liElement) =>
                        (suggestionsReference.current[i] = liElement!)
                    }
                    onFocus={() => {
                        setFocusedSuggestion({
                            index: i,
                            value: suggestions[i]
                        });
                    }}
                    tabIndex={0}
                >
                    <p>{suggestion}</p>
                </li>
            ))}
        </ul>
    );
}

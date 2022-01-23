import React, { MutableRefObject, useEffect, useState } from 'react';
import {
    EVENT_CODE_ARROW_DOWN_KEY,
    EVENT_CODE_ARROW_UP_KEY,
    EVENT_CODE_ENTER_KEY
} from '../../utils/consts';
import './suggestions.component.scss';

interface FocusedSuggestion {
    index: number;
    value: string;
}

interface SuggestionsProps {
    inputReference: MutableRefObject<HTMLInputElement | null>;
    onSelectSuggestion: () => void;
    onSetTags: (tags: Array<string>) => void;
    suggestions: Array<string>;
    suggestionsReference: MutableRefObject<HTMLElement[]>;
    tags: Array<string>;
}

export function Suggestions({
    inputReference,
    onSelectSuggestion,
    onSetTags,
    suggestions,
    suggestionsReference,
    tags
}: SuggestionsProps): JSX.Element {
    const [focusedSuggestion, setFocusedSuggestion] =
        useState<FocusedSuggestion | null>(null);

    useEffect(() => {
        setFocusedSuggestion({ index: 0, value: suggestions[0] });
    }, [suggestions]);

    useEffect(() => {}, [focusedSuggestion, suggestions]);

    function onKeyDownHandler(event: React.KeyboardEvent<HTMLElement>): void {
        if (event.code === EVENT_CODE_ARROW_DOWN_KEY) {
            if (focusedSuggestion !== null) {
                const nextIndex = focusedSuggestion.index + 1;
                suggestionsReference.current[nextIndex].focus();
                setFocusedSuggestion({
                    index: nextIndex,
                    value: suggestions[nextIndex]
                });
            }
        }

        if (event.code === EVENT_CODE_ARROW_UP_KEY) {
            if (focusedSuggestion?.index === 0) {
                inputReference?.current?.focus();
            }
            if (focusedSuggestion?.index) {
                const previousIndex = focusedSuggestion.index - 1;
                suggestionsReference.current[previousIndex].focus();
                setFocusedSuggestion({
                    index: previousIndex,
                    value: suggestions[previousIndex]
                });
            }
        }

        if (event.code === EVENT_CODE_ENTER_KEY) {
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
                    onFocus={() => {
                        setFocusedSuggestion({
                            index: i,
                            value: suggestions[i]
                        });
                    }}
                    ref={(liElement) =>
                        (suggestionsReference.current[i] = liElement!)
                    }
                    tabIndex={0}
                >
                    <p>{suggestion}</p>
                </li>
            ))}
        </ul>
    );
}

import React, { useEffect, useState } from 'react';
import { LabelForSelected } from '../labelForSelected/labelForSelected.component';
import { Suggestions } from '../suggestions/suggestions.component';
import './inputWithLabels.component.scss';

interface InputWithLabelsProps {
    placeholder: string;
    predefinedList: Array<string>;
}

export function InputWithLabels({
    placeholder,
    predefinedList
}: InputWithLabelsProps): JSX.Element {
    const [userInput, setUserInput] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Array<string>>([]);
    const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
    const [tags, setTags] = useState<Array<string>>([]);

    useEffect(() => {
        console.log(tags);
    }, [selectionIndex, tags]);

    function matchSuggestionsToInput(
        input: string,
        predefinedListItem: string
    ) {
        const regex = new RegExp(`^${input}`, `i`);
        const match = regex.test(predefinedListItem);
        return match;
        // return predefinedListItem.toLowerCase().startsWith(input.toLowerCase()) ? true : false;
    }

    function renderSuggestions(
        userInput: string,
        predefinedList: Array<string>
    ) {
        const result: Array<string> | null = predefinedList.filter((item) =>
            matchSuggestionsToInput(userInput, item)
        );
        setSuggestions(result);
    }

    function onChangeUserInput(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        const inputValue = event.target.value;
        setUserInput(inputValue);
        renderSuggestions(inputValue, predefinedList);
    }

    function onCloseHandler(): void {
        //
    }

    // function onKeyDownInputHandler(event: any): void {
    //     if (event.code === 'ArrowDown') {
    //         if (suggestions.length > 0) {
    //             setSelectionIndex(0);
    //         }
    //     }

    //     if (event.code === 'Enter') {
    //         const inputValue = event.target.value;
    //         setUserInput(inputValue);

    //         if (predefinedList.indexOf(inputValue) === -1) {
    //             tags.push(inputValue);
    //             // onChangeUserInput(event);
    //             // setTags(tags);
    //         }
    //     }
    // }

    return (
        <div>
            <div className="input-with-labels">
                <form className="inputField">
                    <input
                        onChange={onChangeUserInput}
                        // onKeyDown={onKeyDownInputHandler}
                        placeholder={placeholder}
                        tabIndex={0}
                        type="text"
                        value={userInput}
                    />
                </form>

                <div className="selected-labels">
                    {tags?.map((tag) => (
                        <LabelForSelected
                            onClose={onCloseHandler}
                            tagName={tag}
                            key={`label-${tag}`}
                        />
                    ))}
                </div>
                {
                    <Suggestions
                        onSetSelectionIndex={setSelectionIndex}
                        onSetTags={setTags}
                        tag={
                            selectionIndex
                                ? suggestions[selectionIndex]
                                : userInput
                        }
                        selectionIndex={selectionIndex}
                        tags={tags}
                        suggestions={suggestions}
                    />
                }
            </div>
        </div>
    );
}

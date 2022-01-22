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
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<
        number | null
    >(null);
    const [selectedSuggestions, setSelectedSuggestions] = useState<
        Array<string>
    >([]);

    useEffect(() => {
        console.log(selectedSuggestions);
    }, [selectedSuggestionIndex, selectedSuggestions]);

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
    //             setSelectedSuggestionIndex(0);
    //         }
    //     }

    //     if (event.code === 'Enter') {
    //         const inputValue = event.target.value;
    //         setUserInput(inputValue);

    //         if (predefinedList.indexOf(inputValue) === -1) {
    //             selectedSuggestions.push(inputValue);
    //             // onChangeUserInput(event);
    //             // setSelectedSuggestions(selectedSuggestions);
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
                    {selectedSuggestions?.map((selectedSuggestion) => (
                        <LabelForSelected
                            onClose={onCloseHandler}
                            title={selectedSuggestion}
                            key={`label-${selectedSuggestion}`}
                        />
                    ))}
                </div>
                {
                    <Suggestions
                        onSetSelectedIndex={setSelectedSuggestionIndex}
                        onSetSelectedSuggestions={setSelectedSuggestions}
                        selectedSuggestion={
                            selectedSuggestionIndex
                                ? suggestions[selectedSuggestionIndex]
                                : userInput
                        }
                        selectedSuggestionIndex={selectedSuggestionIndex}
                        selectedSuggestions={selectedSuggestions}
                        suggestions={suggestions}
                    />
                }
            </div>
        </div>
    );
}

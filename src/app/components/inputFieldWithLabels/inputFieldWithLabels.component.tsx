import React, { useState, 
    // useEffect
 } from 'react';
import { LabelForAddedItem } from '../labelForAddedItem/labelForAddedItem.component';
import { SuggestionsList } from '../suggestionsList/suggestionsList.component';
import './inputFieldWithLabels.component.scss';

interface InputFieldWithLabelsProps {
    placeholder: string;
    predefinedList: Array<string>;
}

export function InputFieldWithLabels({
    placeholder,
    predefinedList
}: InputFieldWithLabelsProps): JSX.Element {
    const [userInput, setUserInput] = useState<string>('');
    const [suggestions, setSuggestions] = useState(['']) ;

    function matchSuggestionsToInput(input: string, predefinedListItem: string) {
        const regex = new RegExp(`^${input}`, `i`);
        const match = regex.test(predefinedListItem);
        return match;
        // return predefinedListItem.toLowerCase().startsWith(input.toLowerCase()) ? true : false; 
    }

    function renderSuggestions(userInput: string, predefinedList: Array<string>) {
        const result: Array<string> = predefinedList.filter(item => matchSuggestionsToInput(userInput, item))
        setSuggestions(result);
    }

    function onChangeUserInput(event: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = event.target.value;
        setUserInput(inputValue);
        renderSuggestions(inputValue, predefinedList);
    }

    return (
        <div>
            <div className="input-field-with-labels">
                <form className="input-field">
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={onChangeUserInput}
                        value={userInput}
                    />
                </form>

                <div className="labels-container">
                    <LabelForAddedItem
                        onClose={() => {
                            console.log('on close');
                        }}
                        title={'added item'}
                    />
                    <LabelForAddedItem
                        onClose={() => {
                            console.log('on close');
                        }}
                        title={'added item'}
                    />
                </div>
            </div>
            <SuggestionsList suggestions={suggestions} selectedSuggestion={suggestions[0]}/>
        </div>
    );
}

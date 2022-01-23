import React, { useEffect, useRef, useState } from 'react';
import { filterSuggestions } from '../../utils/utils';
import { Tag } from '../tag/tag.component';
import { Suggestions } from '../suggestions/suggestions.component';
import './inputField.component.scss';

interface InputFieldProps {
    placeholder: string;
    predefinedList: Array<string>;
}

export function InputField({
    placeholder,
    predefinedList
}: InputFieldProps): JSX.Element {
    const [userInput, setUserInput] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Array<string>>([]);
    const [tags, setTags] = useState<Array<string>>([]);
    const suggestionsRef = useRef([]);

    useEffect(() => {}, [tags]);

    function onChangeUserInput(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setUserInput(event.target.value);
        const filteredSuggestions = filterSuggestions(
            userInput,
            predefinedList
        );
        setSuggestions(filteredSuggestions);
    }

    function onClickHandler(tag: string): void {
        const indexToRemove = tags.indexOf(tag);
        tags.splice(indexToRemove, 1);
        setTags([...tags]);
    }

    function onKeyDownInputHandler(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.code === 'ArrowDown') {
            const firstSuggestionRef: HTMLElement = suggestionsRef.current[0];
            if (firstSuggestionRef) {
                firstSuggestionRef.focus();
            }
        }

        if (event.code === 'Enter') {
            if (tags.indexOf((event.target as HTMLInputElement).value ) === -1) {
                setTags([...tags, (event.target as HTMLInputElement).value]);
            }
            setUserInput('');
        }
    }

    return (
        <div>
            <div className="input-field">
                <div className="input-with-tags">
                    <div className="tags">
                        {tags?.map((tag) => (
                            <Tag
                                key={`tag-${tag}`}
                                onClickHandler={() => onClickHandler(tag)}
                                tagName={tag}
                            />
                        ))}
                    </div>
                    <input
                        onChange={onChangeUserInput}
                        onKeyDown={onKeyDownInputHandler}
                        placeholder={placeholder}
                        tabIndex={0}
                        type="text"
                        value={userInput}
                    />
                </div>

                <Suggestions
                    onSetTags={setTags}
                    tags={tags}
                    suggestions={suggestions}
                    suggestionsReference={suggestionsRef}
                />
            </div>
        </div>
    );
}

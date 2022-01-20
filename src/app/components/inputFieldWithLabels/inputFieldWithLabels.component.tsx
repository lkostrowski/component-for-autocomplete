import React, { useEffect, useState } from 'react';
import { LabelForAddedItem } from '../labelForAddedItem/labelForAddedItem.component';
import './inputFieldWithLabels.component.scss';

interface InputFieldWithLabelsProps {
    placeholder: string;
}

export function InputFieldWithLabels({
    placeholder
}: InputFieldWithLabelsProps): JSX.Element {
    const [userInput, setUserInput] = useState<String>('');

    useEffect(() => {}, [userInput]);

    function onChangeUserInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setUserInput(event.target.value);
        console.log(userInput);
    }

    return (
        <div className="input-field-with-labels">
            <form className="input-field">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={onChangeUserInput}
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
    );
}

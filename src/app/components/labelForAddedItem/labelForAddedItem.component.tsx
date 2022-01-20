import React from 'react';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';
import './labelForAddedItem.component.scss';

interface LabelForAddedItemProps {
    onClose: () => void;
    title: string;
}

export function LabelForAddedItem({
    onClose,
    title
}: LabelForAddedItemProps): JSX.Element {
    return (
        <div className="label-for-added-item">
            <p>{title}</p>
            <button className="btn-close" onClick={onClose}>
                <CloseIcon />
            </button>
        </div>
    );
}

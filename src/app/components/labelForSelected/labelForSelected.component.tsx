import React from 'react';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';
import { trimTitle } from '../../utils/utils';
import './labelForSelected.component.scss';

interface LabelForSelectedProps {
    title: string;
    onClose: () => void;
}

export function LabelForSelected({
    title,
    onClose
}: LabelForSelectedProps): JSX.Element {
    return (
        <div className="label-for-selected">
            <p>{trimTitle(title)}</p>
            <button className="btn-close" onClick={onClose}>
                <CloseIcon />
            </button>
        </div>
    );
}

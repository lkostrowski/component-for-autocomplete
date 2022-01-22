import React from 'react';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';
import { trimTitle } from '../../utils/utils';
import './labelForSelected.component.scss';

interface LabelForSelectedProps {
    tagName: string;
    onClose: () => void;
}

export function LabelForSelected({
    tagName,
    onClose
}: LabelForSelectedProps): JSX.Element {
    return (
        <div className="label-for-selected">
            <p>{trimTitle(tagName)}</p>
            <button className="btn-close" onClick={onClose}>
                <CloseIcon />
            </button>
        </div>
    );
}

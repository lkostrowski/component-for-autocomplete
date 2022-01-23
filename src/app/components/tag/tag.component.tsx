import React from 'react';
import { ReactComponent as CloseIcon } from '../../icons/closeIcon.svg';
import { trimString } from '../../utils/utils';
import './tag.component.scss';

interface TagProps {
    onClickHandler: () => void;
    tagName: string;
}

export function Tag({ onClickHandler, tagName }: TagProps): JSX.Element {
    return (
        <div className="tag">
            <p>{trimString(tagName)}</p>
            <button className="btn-close" onClick={onClickHandler}>
                <CloseIcon />
            </button>
        </div>
    );
}

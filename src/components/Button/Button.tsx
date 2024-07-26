import React, { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';
import { Body } from '../Typography/Typography';
import c from 'classnames';

interface Props {
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({ children, onClick, disabled }) => {
    return (
        <button className={c(styles.button, "inline-flex")} onClick={onClick} disabled={disabled}>
            <Body>{children}</Body>
        </button>
    );
};

export default Button;
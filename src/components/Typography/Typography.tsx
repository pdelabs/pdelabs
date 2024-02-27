import React, { PropsWithChildren } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google'
import c from 'classnames';
import styles from './Typography.module.css';

const titleFont = Plus_Jakarta_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
});

type TitleProps = PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;

export const Title: React.FC<TitleProps> = ({ children, className, ...rest }) => {
    return <h1 className={c(titleFont.className, styles.title, className)} {...rest}>{children}</h1>;
}


export const BigTitle: React.FC<TitleProps> = ({ children, className, ...rest }) => {
    return <h1 className={c(titleFont.className, styles.bigtitle, className)} {...rest}>{children}</h1>;
}


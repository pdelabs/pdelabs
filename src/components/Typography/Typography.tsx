import React, { PropsWithChildren } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google'
import c from 'classnames';
import styles from './Typography.module.css';

const titleFont = Plus_Jakarta_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
});

const bodyFont = Plus_Jakarta_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
});

export type TypographyProps = PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;

export const BigTitle: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h1 className={c(titleFont.className, styles.bigtitle, className)} {...rest}>{children}</h1>;
}

export const Title: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h2 className={c(titleFont.className, styles.title, className)} {...rest}>{children}</h2>;
}

export const Subtitle: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h3 className={c(titleFont.className, styles.subtitle, className)} {...rest}>{children}</h3>;
}

export const Body: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(bodyFont.className, styles.body, className)} {...rest}>{children}</span>;
}

export const SmallBody: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(bodyFont.className, styles.smallbody, className)} {...rest}>{children}</span>;
}

export const Caption: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(bodyFont.className, styles.caption, className)} {...rest}>{children}</span>;
}

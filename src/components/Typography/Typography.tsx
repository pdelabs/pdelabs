import React, { PropsWithChildren } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google'
import c from 'classnames';
import styles from './Typography.module.css';
import { Mail } from 'lucide-react';

const boldFont = Plus_Jakarta_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
});

const font = Plus_Jakarta_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
});

export type TypographyProps = PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;

export const HugeTitle: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h1 className={c(boldFont.className, styles.hugetitle, className)} {...rest}>{children}</h1>;
}

export const BigTitle: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h2 className={c(boldFont.className, styles.bigtitle, className)} {...rest}>{children}</h2>;
}

export const Title: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h3 className={c(boldFont.className, styles.title, className)} {...rest}>{children}</h3>;
}

export const Subtitle: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <h4 className={c(boldFont.className, styles.subtitle, className)} {...rest}>{children}</h4>;
}

export const LargeBody: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(font.className, styles.largebody, className)} {...rest}>{children}</span>;
}

export const Body: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(font.className, styles.body, className)} {...rest}>{children}</span>;
}

export const SmallBody: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(font.className, styles.smallbody, className)} {...rest}>{children}</span>;
}

export const Caption: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <span className={c(font.className, styles.caption, className)} {...rest}>{children}</span>;
}

export const Strong: React.FC<TypographyProps> = ({ children, className, ...rest }) => {
    return <strong className={c(boldFont.className, className)} {...rest}>{children}</strong>;
}

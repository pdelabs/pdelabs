import { FC, PropsWithChildren } from "react";
import { Body, TypographyProps } from "../Typography/Typography";


type LinkProps = PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> & { C?: FC<TypographyProps> };

const Link: FC<LinkProps> = ({ C = Body, ...rest }) => {
    return (
        <a {...rest}>
            <C style={{ textDecoration: 'overline' }}>Link</C>
        </a>
    );
}

export default Link;
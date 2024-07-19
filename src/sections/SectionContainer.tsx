import { FC, PropsWithChildren } from "react"
import styles from './SectionContainer.module.css';
import c from 'classnames';
import { WithClassNameProps } from "@/types";

const Container: FC<PropsWithChildren & WithClassNameProps> = ({ children, className }) => {
    return (
        <div className={c(styles.container, className)}>
            {children}
        </div>
    )
}

export default Container;
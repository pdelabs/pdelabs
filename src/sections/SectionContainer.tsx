import { FC, PropsWithChildren } from "react"
import styles from './SectionContainer.module.css';

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;
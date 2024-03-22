import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Select =  forwardRef(({ label, ...rest }, ref) => {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <select ref={ref} {...rest} />
        </div>
    );
});
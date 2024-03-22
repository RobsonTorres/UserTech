import { forwardRef } from "react";
import styles from "./styles.module.scss";

export default forwardRef(({ label, error, id, ...rest }, ref) => {
    return (
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <input id={id} ref={ref} {...rest}  />
            {error ? <p className={styles.paragraphError}>{error.message}</p> : null}   
        </div>
    );
});
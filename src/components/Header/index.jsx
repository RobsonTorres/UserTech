import Group from "../../assets/Group 189.svg";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";


export const Header = () => {
    const { user, userLogout } = useContext(UserContext);

    return (
        <header>
            <div className={styles.imgBox}>
                <img src={Group} alt="Logo da Kenzie Hub" />
                <button className={styles.btnSair} onClick={() => userLogout()}>Sair</button>
            </div>
            <hr/>
            <div className={styles.userInformation}>
                <h2 className="title">{user?.name}</h2>
                <p>{user?.course_module}</p>
            </div>
            <hr/>
            
        </header>
    )
};
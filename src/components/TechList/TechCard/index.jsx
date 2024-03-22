import { MdEdit, MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const TechCard = ({ tech }) => {
    const { deleteTech, selectEditingTech, setIsEditOpen} = useContext(TechContext);

    const editTech = () => {
        setIsEditOpen(true)
        selectEditingTech(tech)
    } 

    return (
        <div className={styles.divContainer}>
            <li className={styles.container}>
                <div className={styles.divBox}>
                    <span>
                        <h2 className="title two">{tech.title}</h2> 
                        <p className={styles.paragraph}>{tech.status}</p>
                    </span>
                </div>
                <div className={styles.buttons}>
                    <button 
                        onClick={() => editTech()}
                        title="Editar" 
                        aria-label="edit"
                        
                        >
                        <MdEdit />
                    </button>
                    <button
                        onClick={() => deleteTech(tech.id)}
                        title="Deletar"
                        aria-label="delete"
                    >
                        <MdDelete />
                    </button>
                </div>
            </li>
        </div>
    );
};
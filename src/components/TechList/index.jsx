import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import ButtonAdicionar from "../../assets/Button Plus.svg";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

export const TechList = () => {
    const {techList} = useContext(UserContext);
    const {setIsCreateOpen} = useContext(TechContext);

    return (
        <div className={styles.container}>
            <div className={styles.divTecnologies}>
                <h2>Tecnologias</h2>  
                <button className={styles.buttonAdicionar} onClick={() => setIsCreateOpen(true)}>
                    <img src={ButtonAdicionar} alt="Botão de adicionar tecnologia"></img>
                </button>
            </div>
            <ul>
                {
                    techList.map( (tech) => (
                        <TechCard key={tech.id} tech={tech}/>
                    ))
                }
            </ul>
        </div>
    )
}
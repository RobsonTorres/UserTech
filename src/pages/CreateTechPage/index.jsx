import { DefaultTemplate } from "../../components/DefaultTemplate";
import { CreateTechModal } from "../../components/forms/CreateTechModal";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";

export const CreateTechPage = () => {

    const { isCreateOpen } = useContext(TechContext);
    return (
        <DefaultTemplate>
            <main className={styles.container}>
                {isCreateOpen ? <CreateTechModal/> : null}                  
            </main>
        </DefaultTemplate>
    );
};
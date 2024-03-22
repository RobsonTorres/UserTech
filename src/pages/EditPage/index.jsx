import { Navigate } from "react-router-dom";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { EditTechModal } from "../../components/forms/EditTechModal";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import styles from "./style.module.scss";

export const EditPage = () => {
    const { editingTech, isEditOpen } = useContext(TechContext);

    return (
        <DefaultTemplate>
            {editingTech ? (
                <main className={styles.container}>
                    {isEditOpen ? <EditTechModal/> : null}
                </main>
            ) : <Navigate to="/user" />}
        </DefaultTemplate>
    );
};
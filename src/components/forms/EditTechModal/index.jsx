import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";
import Input from "../Input";
import { Select } from "../Select";

export const EditTechModal = () => {
    const { editTech, setIsEditOpen } = useContext(TechContext);

    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        editTech(formData);
    }

    return (
        <>
            <div className={styles.containerEditModal}>
                <div className={styles.modalBox}>
                    <div className={styles.header}>
                        <button className={styles.closeButton} onClick={() => setIsEditOpen(false)}>X</button>
                        <h3>Tecnologia Detalhes</h3>
                    </div>
                    <form onSubmit={handleSubmit(submit)} className={styles.container}>
                        <div className={styles.divBox}>
                            <Input
                                className={styles.tecnologyInput}
                                {...register("title")}
                                label="Nome do projeto"
                                type="text"
                            />
                            <Select
                                className={styles.tecnologySelect}
                                {...register("status")}
                                label="Status"
                                type="select"
                            >
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </Select>
                        </div>
                        <button type="submit" className={styles.editButton}>Editar tecnologia</button>
                    </form>
                </div>
            </div>
        </>
    );
};
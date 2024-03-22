import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import Input from "../Input";
import { Select } from "../Select";
import styles from "./style.module.scss";


export const CreateTechModal = () => {

    const {register, handleSubmit} = useForm()

    const { createTech, setIsCreateOpen } = useContext(TechContext)

    const submit = (formData) => {
        createTech(formData);
    }

    return (
        <>
        <div className={styles.containerCreateModal}>
            <div className={styles.modalBox}>
                <div className={styles.header}>
                        <button onClick={() => setIsCreateOpen(false)} className={styles.closeButton}>X</button>
                        <h3>Cadastrar tecnologia</h3>
                </div>
                <form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
                    <div className={styles.divBox}>
                        <Input 
                            className={styles.tecnologyInput}
                            {...register("title")}
                            label="Nome"
                            type="text"
                        />
                        <Select 
                            className={styles.tecnologySelect}
                            label="Selecionar status"
                            type="select"
                            {...register("status")}
                        >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button type="submit" className={styles.registerButton}>Cadastrar tecnologia</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
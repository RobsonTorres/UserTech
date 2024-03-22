import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import styles from "./styles.module.scss";
import Group from "../../../assets/Group 189.svg";


export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // formState: { errors, isDirty, isValid },
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const { userRegister } = useContext(UserContext);

    const submit = (formData) => {
        userRegister(formData);
    };


    return (
        <>
       
        <form className={styles.registerContainer} onSubmit={handleSubmit(submit)}>
            <div className={styles.divBox}>
                <div className={styles.imgBox}>
                    <img src={Group} alt="Logo da Kenzie Hub" />
                    <Link className={styles.btnVoltar} to="/">Voltar</Link>
                </div>

                <div className={styles.divInputs}>
                    <div className={styles.divTitles}>
                        <h2 className="title">Crie sua conta</h2>
                        <h3 className="headline">Rapido e grátis, vamos nessa</h3>
                    </div>
                    <p className="paragraph small">Nome</p>
                    <Input
                        className="headline"
                        type="text"
                        placeholder="Digite aqui seu nome"
                        error={errors.name}
                        {...register("name")}
                    />

                    <p className="paragraph small">Email</p>
                    <Input
                        className="headline"
                        type="text"
                        placeholder="Digite aqui seu email"
                        error={errors.email}
                        {...register("email")}
                    />

                    <p className="paragraph small">Senha</p>
                    <Input
                        className="headline"
                        type="password"
                        placeholder="Digite aqui sua senha"
                        error={errors.password}
                        {...register("password")}
                    />

                    <p className="paragraph small">Confirmar Senha</p>
                    <Input
                        className="headline"
                        placeholder="Confirme aqui sua senha"
                        type="password"
                        error={errors.confirmPassword}
                        {...register("confirmPassword")}
                    />

                    <p className="paragraph small">Bio</p>
                    <Input
                        className="headline"
                        type="text"
                        placeholder="Fale sobre você"
                        error={errors.bio}
                        {...register("bio")}
                    />

                    <p className="paragraph small">Contato</p>
                    <Input
                        className="headline"
                        placeholder="Opção de contato"
                        type="text"
                        error={errors.contact}
                        {...register("contact")}
                    />

                    <p className="paragraph small">Selecionar módulo</p>
                    <select 
                        className="headline" 
                        type="select"
                        error={errors.course_module}
                        {...register("course_module")}
                    >
                        <option value="Primeiro modulo (Introdução ao Front End)">Primeiro modulo (Introdução ao Front End)</option>
                        <option value="Segundo modulo">Segundo modulo</option>
                    </select>

                    <button className="headline enterButton" type="submit">Cadastrar</button>
                    {/* <button className="headline enterButton" type="submit" disabled={!isValid || !isDirty}>Cadastrar</button> */}
                </div>
            </div>
        </form>
        </>
    )
};
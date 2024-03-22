import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import Group from "../../../assets/Group 189.svg";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { UserContext } from "../../../providers/UserContext";

export const Loginform = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const { userLogin } = useContext(UserContext);
    const [isHidden, setIsHidden] = useState(true);

    const submit = (formData) => {
        userLogin(formData);
    };

    return (
        <>
        <form className={styles.loginFormContainer} onSubmit={handleSubmit(submit)}>
            <div className={styles.logo}>
                <img src={Group} alt="Logo da Kenzie Hub"></img>
            </div>
            <div className={styles.loginFormBox}>
                <h3 className="title two">Login</h3>
                <div className={styles.divBox}>
                    <div className={styles.input}>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        error={errors.email}
                        {...register("email")}
                    />

                    </div>
                    

                    <div className={styles.input}>
                        <div className={styles.password}>
                            <Input
                                label="Senha"
                                type={isHidden ? "password" : "text"}
                                id="password"
                                error={errors.password}
                                {...register("password")}
                            />
                            <button onClick={() => setIsHidden(!isHidden)} type="button">
                                {isHidden ? <MdVisibilityOff size={15} /> : <MdVisibility size={15} />}
                            </button>
                        </div>
                    </div>

                    <button className="enterButton" type="submit" >Entrar</button>
                    <div className={styles.divFrase}>
                        <p className={styles.frase}>Ainda não possui uma conta?</p>
                    </div>
                    <Link className="exitButton" to="/register">Cadastre-se</Link>
                </div>
            </div>
        </form>
        
        </>
    );
};
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services";
import { toast } from "react-toastify";


export const UserContext = createContext({});


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [techList, setTechList] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        if(token && userId){
        const getUser = async () => {
            try {
                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                setTechList(data.techs)
                navigate("/user")
            } catch (error) {
                console.error(error)
            } 
        }

        getUser();
    }
    }, [])

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        toast.warn("Deslogando...")
    };

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);
            setUser(data.user);
            setTechList(data.user.techs);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            navigate("/user");
        } catch (error) {
            console.error(error);
            if (error.response?.data.message === 'Incorrect email / password combination') {
                toast.error("O e-mail e a senha não correspondem.");
            }
        } 
    };

    const userRegister = async (formData) => {
        try {
            await api.post("/users", formData);
            navigate("/");
            toast.success("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error(error);
            if (error.response?.data.message === "Email already exists") {
                toast.error("Usuário já cadastrado");
            }
        } 

        };

    return (
        <UserContext.Provider value={{ techList, user, setUser, setTechList, userLogin, userLogout, userRegister }}>
            {children}
        </UserContext.Provider>
    );
};

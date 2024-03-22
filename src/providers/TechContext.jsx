import { createContext, useContext, useEffect, useState } from "react";
import api from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { techList, setTechList } = useContext(UserContext);

    const [editingTech, setEditingTech] = useState(null);

    const navigate = useNavigate();

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const createTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            const { data } = await api.post("/users/techs/", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList([...techList, data]);
            navigate("/user")
            toast.success("Tecnologia adicionada com sucesso!", {
            });
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTech = async (removingId) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            await api.delete(`/users/techs/${removingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techList.filter(tech => tech.id !== removingId);

            setTechList(newTechList);

            toast.success("Tecnologia deletada com sucesso!", {
            });
        } catch (error) {
            console.error(error);
        }
    }


    const editTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            const { data } = await api.put(`/users/techs/${editingTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const newTechList = techList.map(tech => {
                if (tech.id === editingTech.id) {
                    return data;
                } else {
                    return tech;
                }
            })

            setTechList(newTechList);
            setEditingTech(null)
            navigate("/user");
            toast.success("Tecnologia atualizada com sucesso")
        } catch (error) {
            console.error(error)
        }
    }

    const selectEditingTech = (tech) => {
        setEditingTech(tech);
    }


    return (
        <TechContext.Provider value={{ createTech, deleteTech, editTech, editingTech, selectEditingTech, isCreateOpen, setIsCreateOpen, isEditOpen, setIsEditOpen }}>
            {children}
        </TechContext.Provider>
    )
}
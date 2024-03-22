import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { TechList } from "../../components/TechList";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "../../components/forms/CreateTechModal";
import { EditTechModal } from "../../components/forms/EditTechModal";

export const Dashboard = () => {
    const {isCreateOpen} = useContext(TechContext);
    const {isEditOpen} = useContext(TechContext);

    return (
        <DefaultTemplate>
            <main>
                <div>
                    <TechList/>
                    {isCreateOpen ? <CreateTechModal/> : null}    
                    {isEditOpen ? <EditTechModal /> : null}                
                </div>
            </main>
        </DefaultTemplate>
    )
};
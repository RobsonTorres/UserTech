import { Header } from "../Header";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>

    );
};
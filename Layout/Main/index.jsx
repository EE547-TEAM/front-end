import { Container } from "@mui/material";

export default function Main({ children, ...props }) {

    return (
        <>
            <Container maxWidth="md" {...props}>
                {children}
            </Container>
        </>
    );
}
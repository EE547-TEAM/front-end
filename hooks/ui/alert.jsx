import { useMemo } from "react"
import Alert from "@mui/material/Alert";

export default function useAlert(message) {
    
    const AlertError = useMemo(() => {
        if (message === '')
            return null;
        return <Alert severity="error">{message}</Alert>
    }, [message])

    return AlertError
}
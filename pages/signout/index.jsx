import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Signout() {

    const router = useRouter();

    const onSignOutClick = useCallback(async () => {
        const res = await fetch('/api/signout');
        router.push('/signin');
    }, [router]);

    return <Button onClick={onSignOutClick}>SIGN OUT</Button>
}
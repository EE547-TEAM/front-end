import { useRef } from "react";

export const LOGIN_USER = 'loginUser';

export function useGetLoginUser() {

    const userRef = useRef(null);

    if (typeof window === 'undefined')
        return useRef.current;

    // under browser
    console.log('run?');
    const newUser = JSON.parse(localStorage.getItem(LOGIN_USER));
    if (newUser === null || userRef.current == null || newUser._id !== userRef.current._id) {
        userRef.current = newUser;
    }

    return userRef.current;
}
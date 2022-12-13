import { useRef } from "react";

export const LOGIN_USER = 'login_user'

export function useGetLoginUser() {

    const userRef = useRef(null);

    if (typeof window === 'undefined')
        return useRef.current;

    // under browser
    const newUser = JSON.parse(sessionStorage.getItem(LOGIN_USER));
    if (newUser === null || userRef.current == null || newUser._id !== userRef.current._id) {
        userRef.current = newUser;
    }

    return userRef.current;
}

export function removeLoginUser() {
    sessionStorage.removeItem(LOGIN_USER);
}

export function setLoginUser({ user }) {
    sessionStorage.setItem(LOGIN_USER, JSON.stringify(user));
}
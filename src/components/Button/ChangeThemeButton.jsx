import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext';
import Button from 'react-bootstrap/button'
import "./ChangeThemeButton.css"

export default function ChangeThemeButton() {

    const { state, dispatch } = useContext(ThemeContext);

    const onClick =() => {
        if (state.isDarkMode) {
            dispatch("SET_LIGHT_MODE");
        } else {
            dispatch("SET_DARK_MODE");
        }
    }

    return (
        <Button className={`h-25 button-${state.isDarkMode ? "dark" : "light"}`} variant="primary" onClick={() => onClick()}> Change Theme</Button>
    )
}

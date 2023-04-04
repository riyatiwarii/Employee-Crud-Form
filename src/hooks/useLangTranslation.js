import { useTranslation } from "react-i18next";

export const useLangTranslation = () => {

    const {t, i18n} = useTranslation()
    const handleChangeLng = (e) => {
            i18n.changeLanguage(e.target.value);
            localStorage.setItem("lng", e.target.value);
        };

    return [t, handleChangeLng]

}

export default useLangTranslation
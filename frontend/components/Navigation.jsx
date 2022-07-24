import style from "./Navigation.module.scss"
import User from "./user.svg"

export default () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.items}>
                <li className={style.logo}>Shorter</li>
                <li>
                    <User/>
                </li>
            </ul>
        </nav>
    )
}
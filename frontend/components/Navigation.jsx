import style from "./Navigation.module.scss"
import User from "./user.svg"
import {Dropdown} from "@nextui-org/react";
import {useRouter} from "next/router";

export default () => {
    const router = useRouter()

    return (
        <nav className={style.navigation}>
            <ul className={style.items}>
                <li className={style.logo}>Shorter</li>
                <li>
                    <Dropdown variant={"solid"}>
                        <Dropdown.Trigger>
                            <div className={style.account}>
                                <User/>
                            </div>
                        </Dropdown.Trigger>
                        <Dropdown.Menu>
                            <Dropdown.Item key="login">
                                <p onClick={() => {
                                    router.push("/auth/login")
                                }}>
                                    login
                                </p>
                            </Dropdown.Item>
                            <Dropdown.Item  key="register">
                                <p onClick={() => {
                                    console.log("register")
                                    router.push("/auth/register")
                                }}>
                                    register
                                </p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </li>
            </ul>
        </nav>
    )
}
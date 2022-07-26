import style from "./Auth.module.scss"
import {Button, Input} from "@nextui-org/react";

export default () => {
    return (
        <form className={style.form}>
            <h1>Login</h1>
            <Input label="Email" type="email" name="email"/>
            <Input label="Password" type="password" name="password"/>
            <Button type="submit">Login</Button>
        </form>
    )
}
import style from "./Auth.module.scss"
import Link from "next/link";

export default () => {
    return (
        <form className={style.form}>
            <h1>Register</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Password verify"/>
            <p>Already have an account? <Link href={"/auth/login"}>login</Link></p>
            <div className={style.buttons}>
                <input type="reset" placeholder="cancel" className={style.cancel}/>
                <input type="submit" placeholder="login" className={style.submit}/>
            </div>
        </form>
    )
}
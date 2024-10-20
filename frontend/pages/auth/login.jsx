import style from "./Auth.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

export default () => {
    const router = useRouter();

    function submit(event) {
        event.preventDefault();
        console.log("submit");
    }

    function reset(event){
        event.preventDefault();
        router.push("/")
    }

    return (
        <form className={style.form} onReset={reset} onSubmit={submit}>
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <p>Create an account <Link href={"/auth/register"}>register</Link></p>
            <div className={style.buttons}>
                <input type="reset" placeholder="cancel" className={style.cancel}/>
                <input type="submit" placeholder="login" className={style.submit}/>
            </div>
        </form>
    )
}
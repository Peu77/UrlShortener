import style from "../styles/Home.module.scss";
import Waves from "../public/waves.svg";
import Navigation from "../components/Navigation";
import {useRef} from "react";

export default function Home() {
    const linkRef = useRef();

    function createLink(event) {
        event.preventDefault()
    }

    return (
        <div className={style.home}>
            <Navigation/>
            <main className={style.main}>
                <div className={style.text}>
                    <h1>Short links, big results</h1>
                    <p>
                        A URL shortener built with powerful tools to help you grow and protect your brand.
                    </p>
                </div>
            </main>

            <Waves className={style.waves}/>
            <footer className={style.gradient}>
                <form className={style.form} onSubmit={createLink}>
                    <input placeholder="Shorten your link" type="text"/>
                    <button>Shorten</button>
                </form>
            </footer>
        </div>
    )
}

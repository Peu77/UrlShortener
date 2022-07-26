import style from "../styles/Home.module.scss";
import Waves from "../public/waves.svg";
import Navigation from "../components/Navigation";
import {useRef, useState} from "react";
import {Button, Modal} from '@nextui-org/react';
import axios from "axios";


export default function Home() {
    const linkRef = useRef();
    const [visible, setVisible] = useState(false);
    const [currentLink, setCurrentLink] = useState('');

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    function createLink(event) {
        event.preventDefault()

        axios.post("http://localhost:4000/link/create", {
            url: linkRef.current.value
        }).then(response => {
            setCurrentLink(response.data.url);
            setVisible(true);
        })
    }

    return (
        <div className={style.home}>
            <Modal
                blur={true}
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>

                </Modal.Header>
                <Modal.Body>
                    <p>http://localhost:3000/link/{currentLink}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

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
                    <input ref={linkRef} required={true} minLength={7} placeholder="Shorten your link" type="text"/>
                    <button>Shorten</button>
                </form>
            </footer>
        </div>
    )
}

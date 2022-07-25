import {useRouter} from "next/router";
import axios from "axios";

export async function getServerSideProps({params}) {
    const response = await axios.get(`http://localhost:4000/link/get`, {
        params: {
            id: params.id
        }
    })

    console.log(response.data)

    return {
        redirect: {
            permanent: true,
            destination: response.data.url
        }
    }
}

export default () => {
    return (
        <></>
    )
}
import Layout from "../components/Layout";
import styles from "../styles/user.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MuiButton from "../components/MuiButton";
import { useState } from "react";

export async function getServerSideProps(){
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    return {
        props:{"userData":data.results.at(0)}
    }
}

export default function DynamicRendering({ userData }){
   const [user, setUser] = useState(userData)

    async function getNewUser(){
        const res = await fetch('https://randomuser.me/api/')
        const data = await res.json()
        setUser(data.results.at(0))
    }
    
    return(
        <Layout title="Dynamic Rendering">
                <div className={styles.picture}>
                    <img src={user.picture.large} alt="user photo" />
                </div>
                <h2 className={styles.name}>{`${user.name.first} ${user.name.last}`}</h2>
                <FontAwesomeIcon icon="envelope" className={styles.icon} />
                <p className={styles.info}>{user.email}</p>
                <FontAwesomeIcon icon="phone" className={styles.icon} />
                <p className={styles.info}>{user.phone}</p>
                <MuiButton 
                    title="New User" 
                    icon="user" 
                    className={styles.btn}
                    onClick={() => {getNewUser()}}
                    />
        </Layout>
    )
}
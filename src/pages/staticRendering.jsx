import Layout from '../components/Layout'
import styles from '../styles/posts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return{
        props:{
            posts,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString().slice(0, 5),
        }
    }
}

export default function StaticRendering({ posts, date, time }){
    return(
        <Layout title="Static Page">
            <h2>Blog Page</h2>
            <ul className={styles.frame}>
             {posts.map(post => (
                 <li key={post.id} className={styles.post}>
                     <h3>{post.title}</h3>
                     <p>{post.body}</p>
                     <FontAwesomeIcon icon="calendar-day" className={styles.icon} />
                     <strong>{date}</strong>
                     <FontAwesomeIcon icon="clock" className={styles.icon} />
                     <strong>{time}</strong>
                 </li>
             ))}   
            </ul>
        </Layout>
    )
}
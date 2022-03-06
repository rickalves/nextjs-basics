import Link from "next/link"
import MuiButton from "./MuiButton"

export default function Navigator(props){
    return(
        <Link href={props.url} passHref>
           <a>
            <MuiButton  {...props} />
           </a>
        </Link>
    )
}
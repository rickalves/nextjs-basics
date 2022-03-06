import Navigator from "./Navigator";

export default function Header(props){
    return(
        <header>
             <h2>{props.title}</h2>
             <Navigator title="Home" icon="home" url="/" />
             <Navigator title="Customers" icon="users" url="/customers/id" />
             <Navigator title="Use State" icon="spinner" url="/objstate" />
             <Navigator title="Static Page" icon="print" url="/staticRendering" />
             <Navigator title="Dynamic Page" icon="retweet" url="/dynamicRendering" />
        </header>
    )
}
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)
//componentes de layout
import Header from '../components/Header'
import Footer from './Footer'

export default function Layout(props){
    return (
        <div className="container">
            <Header title={props.title}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
import Menu from "./components/Menu"
import Contenido from "./components/Contenido"
import "./PanelControl.css"

const PanelControl =()=> {
    
    return(
        <section className="panel-control">
             <Menu/>
             <Contenido/>
            
        </section>
    )

}
export default PanelControl
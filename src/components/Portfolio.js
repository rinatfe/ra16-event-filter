import { Component, UseState } from "react";
import ToolBar from "./Toolbar";
import ProjectList from "./ProjectList";
import {img} from "./img";


const filters = ["All", "Websites", "Flayers", "Business Cards"];

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.onSelectFilterHandler = this.onSelectFilterHandler.bind(this);
    }

    state = {current: "All", filteredImage: img};

    onSelectFilterHandler(evt) {
        let arr = null
            if(evt.target.innerText == "All") {
                arr = img;
            } else {
                arr= img.filter(item => 
                item.category === evt.target.innerText);
            }
              
        this.setState( {
            current: evt.target.innerText,
            filteredImage: arr
        });        
    }

    render() {
       return(
        <div className="Portfolio">
            <ToolBar
                filters={filters} 
                selected={this.state.current}
                onSelectFilter={this.onSelectFilterHandler}
            />
            <ProjectList images={this.state.filteredImage} />   
        </div>
       ); 
    }
}

export default Portfolio;
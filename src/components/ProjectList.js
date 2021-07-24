import { Component, UseState } from "react";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component {

    

    render() {
        const {images} = this.props;
        return(
            <div className="image-container">
                {images.map(item=> {
                    return <img src={item.img} />
                })}
            </div>
        );
    }
}

export default ProjectList;
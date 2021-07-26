import { Component, UseState } from "react";
import ProjectItem from "./ProjectItem";
import PropTypes from 'prop-types';

class ProjectList extends Component {

    static propTypes = {
        images:PropTypes.array,
    }

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
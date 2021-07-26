import { Component, UseState } from "react";
import PropTypes from 'prop-types';

class ToolBar extends Component {
    static propTypes = {
        filters:PropTypes.array,
        selected:PropTypes.string,
        onSelectFilter:PropTypes.func
    }

    render() {
        const {filters, selected, onSelectFilter} = this.props;
        return(
            <div className="toolBar">
                <ul className="list">{filters.map((item, idx) => {
                    if(item == selected) {
                        return <li key={idx} className="item selected" onClick={onSelectFilter}>{item}</li>
                    } else {
                        return <li key={idx} className="item" onClick={onSelectFilter}>{item}</li>;
                    }
                    })}
                </ul>
            </div>
        );
    }
}

export default ToolBar;
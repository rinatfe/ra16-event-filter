import { Component, UseState } from "react";

class ToolBar extends Component {
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
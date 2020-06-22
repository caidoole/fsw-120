import React from 'react'
import './Djstyle.css'
class DjButtons extends React.Component {
    render() {
        return (
            <div className="active-buttons" style={{ backgroundColor: this.props.color }}>
            </div>
        )
    }
}
export default DjButtons
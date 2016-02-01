window.ReactChild = React.createClass({
    render: function() {
        return (
            <div>
                this component is in <span className="language">{this.props.language}</span>
            </div>
        );
    }
});
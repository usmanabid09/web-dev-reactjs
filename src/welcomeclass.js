import React from "react";

class WelcomeFromClass extends React.Component {

    state = {
        finishWelcome: false,
        active: true
    };

    constructor(props) {
        super(props);
        console.log("LIFE_CYCLE", "constructor");
    }

    componentDidMount() {
        console.log("LIFE_CYCLE", "componentDidMount");
        setInterval(() => {
            this.setState({finishWelcome: true});
        }, (1000 * 3));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LIFE_CYCLE", "shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LIFE_CYCLE", "getSnapshotBeforeUpdate");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LIFE_CYCLE", "componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("LIFE_CYCLE", "componentWillUnmount");
    }

    render() {
        console.log("LIFE_CYCLE", "render");
        const {finishWelcome, active} = this.state;
        const {newElement} = this.props;
        return finishWelcome ?
            <div>
                <p className={active ? "active" : ""}>Let's Start</p>
                {newElement}
            </div>
            : <h1>Welcom {this.props.name}</h1>
    }
}

export default WelcomeFromClass;
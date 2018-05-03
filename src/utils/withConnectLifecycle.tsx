import * as React from 'react';
import { connect } from 'react-redux';

const WrapperComponent = <P extends any>(MainComponent: React.ComponentType<P>) => {
    return class extends React.Component<P> {

        componentDidMount() {
            this.props.loadInitComponentData();
        }

        render() {
            return <MainComponent {...this.props} />;
        }
    }
}

export default function withConnectLifecycle(component: React.ComponentType, reducers: string[], actions: any) {
    return connect(state => (Object.assign({}, ...reducers.map(reducer => ({[reducer]: state[reducer]})))), actions)(WrapperComponent(component));
}

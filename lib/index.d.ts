import * as React from 'react';
interface Props {
    isStatic?: boolean;
    style?: object;
    children?: JSX.Element[];
}
interface State {
    rootElemWidth: number;
    rootElemHeight: number;
    isOnHover: boolean;
    container: object;
    shine: object;
    layers: any;
}
export default class AtvParallax extends React.Component<Props, State> {
    state: {
        rootElemWidth: number;
        rootElemHeight: number;
        isOnHover: boolean;
        container: {};
        shine: {};
        layers: any[];
    };
    private root;
    componentDidMount(): void;
    handleMove: ({ pageX, pageY }: {
        pageX: any;
        pageY: any;
    }) => void;
    handleTouchMove: (evt: any) => void;
    handleEnter: () => void;
    handleLeave: () => void;
    handleStaticEvent: () => void;
    allLayers: () => any[];
    renderShadow: () => JSX.Element;
    renderLayers: () => JSX.Element;
    renderShine: () => JSX.Element;
    render(): JSX.Element;
}
export {};

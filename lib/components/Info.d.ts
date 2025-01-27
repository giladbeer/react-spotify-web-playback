import * as React from 'react';
import { StylesOptions } from '../types/common';
import { SpotifyPlayerTrack } from '../types/spotify';
interface Props {
    isActive: boolean;
    onFavoriteStatusChange: (status: boolean) => any;
    showSaveIcon: boolean;
    styles: StylesOptions;
    token: string;
    track: SpotifyPlayerTrack;
    updateSavedStatus?: (fn: (status: boolean) => any) => any;
}
interface State {
    isSaved: boolean;
}
export default class Info extends React.PureComponent<Props, State> {
    private isActive;
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentDidUpdate(previousProps: Props): Promise<void>;
    componentWillUnmount(): void;
    private handleClickIcon;
    private setStatus;
    private updateState;
    render(): JSX.Element;
}
export {};

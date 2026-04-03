import type Mithril from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
export interface UsercardStatAttrs extends ComponentAttrs {
    icon: string;
    displayText: string;
}
export default class UsercardStat<T extends UsercardStatAttrs = UsercardStatAttrs> extends Component<T> {
    view(vnode: Mithril.Vnode): JSX.Element;
}

import { component, attr } from "springtype/web/component";
import { FABase } from "./fa-base";

export interface IFALayersAttrs {
    fw?: boolean;
}

@component
export class FALayers extends FABase<IFALayersAttrs> {

    tag: string = 'span';

    @attr
    fw: boolean = true;

    onAfterElCreate() {

        super.onAfterElCreate();

        const classes = [...this.elClass, 'fa-layers'];

        if (this.fw) {
            classes.push('fa-fw');
        }
        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}
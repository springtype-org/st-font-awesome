import { component } from "springtype/web/component";
import { FABase } from "./fa-base";

@component
export class FALayersCounter extends FABase {

    tag: string = 'span';

    onAfterElCreate() {

        super.onAfterElCreate();

        const classes = [...this.elClass, 'fa-layers-counter'];
        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}
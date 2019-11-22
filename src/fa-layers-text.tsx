import { component } from "springtype/web/component";
import { FABase } from "./fa-base";

@component
export class FALayersText extends FABase {

    tag: string = 'span';

    onAfterElCreate() {

        super.onAfterElCreate();

        const classes = [...this.elClass, 'fa-layers-text'];
        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}
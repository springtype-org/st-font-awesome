import { component } from "springtype/web/component";
import { FABase } from "./fa-base";

@component
export class FALayersText extends FABase {

    tag: string = 'span';

    render() {
        return this.renderChildren();
    }
}
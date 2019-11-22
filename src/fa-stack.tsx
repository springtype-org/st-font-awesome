import { component, attr } from "springtype/web/component";
import { FABase } from "./fa-base";

@component
export class FAStack extends FABase {

    tag: string = 'span';

    onAfterElCreate() {

        super.onAfterElCreate();

        this.elClass = [...this.elClass, 'fa-stack'];
    }

    render() {
        return this.renderChildren();
    }
}
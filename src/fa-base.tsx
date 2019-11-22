import { st } from "springtype/core";
import { component, attr } from "springtype/web/component";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export type VertialAlignTypes = 'top' | 'middle' | 'bottom';
export type FASizes = SizeProp | 'block';

export interface IFABaseAttrs {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    background?: string;
    themeClass?: string;
    primaryOpacity?: number;
    secondaryOpacity?: number;
    primaryColor?: string;
    secondaryColor?: string;
    transform?: Array<string>;
    mask?: Array<string>;
    verticalAlign?: VertialAlignTypes;
    size?: FASizes;
}

@component
export class FABase<IFABaseSuperAttrs = {}> extends st.component<IFABaseAttrs & IFABaseSuperAttrs> {

    tag: string = 'i';

    @attr
    fontSize: string;

    @attr
    size: FASizes;

    @attr
    fontWeight: number;

    @attr
    color: string;

    @attr
    background: string;

    @attr
    themeClass: string;

    @attr
    verticalAlign: VertialAlignTypes;

    @attr
    primaryOpacity: number;

    @attr
    secondaryOpacity: number;

    @attr
    primaryColor: string;

    @attr
    secondaryColor: string;

    @attr
    transform: Array<string>;

    @attr
    mask: Array<string>;

    onAfterElCreate() {

        const style = {};

        if (this.fontSize) {
            style['font-size'] = this.fontSize;
        }

        if (this.primaryOpacity) {
            style['--fa-primary-opacity'] = this.primaryOpacity;
        }

        if (this.secondaryOpacity) {
            style['--fa-secondary-opacity'] = this.secondaryOpacity;
        }

        if (this.primaryColor) {
            style['--fa-primary-color'] = this.primaryColor;
        }

        if (this.secondaryColor) {
            style['--fa-secondary-color'] = this.secondaryColor;
        }

        if (this.fontWeight) {
            style['font-weight'] = this.fontWeight;
        }

        if (this.color) {
            style['color'] = this.color;
        }

        if (this.verticalAlign) {
            style['vertical-align'] = this.verticalAlign;
        }

        if (this.background) {
            style['background'] = this.background;
        }

        const attrs = {};

        if (this.transform) {
            attrs['data-fa-transform'] = this.transform.join(' ');
        }

        if (this.mask) {
            attrs['data-fa-mask'] = this.mask.join(' ');
        }

        this.elAttributes = attrs;

        this.elStyle = style;

        const classes = [...this.elClass];

        if (this.themeClass) {
            classes.push(this.themeClass);
        }

        if (this.size) {
            classes.push(`fa-${this.size}`);
        }

        console.log('base add classes', classes)
        this.elClass = classes;
    }

    render() {
        return this.renderChildren();
    }
}
import { component, attr } from "springtype/web/component";
import { FABase } from "./fa-base";

export type StackSizes = '1x' | '2x';

export interface IFAAttrs {
    icon?: string;
    duotone?: boolean;
    swapOpacity?: boolean;
    rotate90?: boolean;
    rotate180?: boolean;
    rotate270?: boolean;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    flipBoth?: boolean;
    animateSpin?: boolean;
    animatePulse?: boolean;
    pullRight?: boolean;
    pullLeft?: boolean;
    border?: boolean;
    inverse?: boolean;
    stack?: StackSizes;
}

@component
export class FA extends FABase<IFAAttrs> {

    @attr
    icon: string;

    @attr
    duotone: boolean;

    @attr
    swapOpacity: boolean;

    @attr
    rotate90: boolean;

    @attr
    rotate180: boolean;

    @attr
    rotate270: boolean;

    @attr
    flipHorizontal: boolean;

    @attr
    flipVertical: boolean;

    @attr
    flipBoth: boolean;

    @attr
    animateSpin: boolean;

    @attr
    animatePulse: boolean;

    @attr
    pullRight: boolean;

    @attr
    pullLeft: boolean;

    @attr
    border: boolean;

    @attr
    inverse: boolean;

    @attr
    stack: StackSizes;

    onAfterElCreate() {

        super.onAfterElCreate();

        const classes = [...this.elClass, this.duotone ? 'fad' : 'fas', `fa-${this.icon}`];

        if (this.swapOpacity) {
            classes.push('fa-swap-opacity');
        }

        if (this.rotate90) {
            classes.push('fa-rotate-90');
        }

        if (this.rotate180) {
            classes.push('fa-rotate-180');
        }

        if (this.rotate270) {
            classes.push('fa-rotate-270');
        }

        if (this.flipHorizontal) {
            classes.push('fa-flip-horizontal');
        }

        if (this.flipVertical) {
            classes.push('fa-flip-vertical');
        }

        if (this.flipBoth) {
            classes.push('fa-flip-both');
        }

        if (this.animateSpin) {
            classes.push('fa-spin');
        }

        if (this.animatePulse) {
            classes.push('fa-pulse');
        }

        if (this.pullLeft) {
            classes.push('fa-pull-left');
        }

        if (this.pullRight) {
            classes.push('fa-pull-right');
        }

        if (this.border) {
            classes.push('fa-border');
        }

        if (this.inverse) {
            classes.push('fa-inverse');
        }

        if (this.stack) {
            classes.push(`fa-stack-${this.stack}`);
        }
        this.elClass = classes;
    }
}
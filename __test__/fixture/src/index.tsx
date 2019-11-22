import { st } from 'springtype/core';
import { tsx } from 'springtype/web/vdom';
import { FA, FALayers, FALayersCounter } from '../../../dist';

st.render(
    <FALayers size="4x">
        <FA icon="envelope" />
        <FALayersCounter color="orange">20</FALayersCounter>
    </FALayers>
);
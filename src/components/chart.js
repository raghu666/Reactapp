import _ from 'lodash'; // for average _ for lodash
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// Reusable component because it is used for temperature, humidity and pressure.


function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div className="d-inline-block justify-content-center">
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
            {"Avg: " + average(props.data)} {props.units}
        </div>
        </div>
    );
}
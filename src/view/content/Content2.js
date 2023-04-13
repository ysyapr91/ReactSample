import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from 'reducers/module/counter';

import CounterExam from 'view/component/test/CounterExam';

function Content2() {
    
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    return (
        <div>
            [Content2]
            <br/>
            {number}
            <br/>
            <br/>
            ===============
            <br/>
            <CounterExam/>
        </div>
    );
}

export default Content2;

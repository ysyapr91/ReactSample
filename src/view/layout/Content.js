import { React, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContentLayout from 'view/content/Content2';



function Content() {
    const { view } = useSelector(state => ({
        view: state.content.view
    }));
    
    let Comp = lazy(() => import(view))
    
    return (
        <div className="content">
            {view}
            <Comp/>
            <ContentLayout/>
        </div>
    );
}

export default Content;

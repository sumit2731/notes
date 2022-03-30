import {Fragment} from 'react';
import classes from './Layout.module.css';
import {useHistory,useParams,useRouteMatch, useLocation} from 'react-router-dom';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
    const history = useHistory();
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();
    debugger;
    return (
        <Fragment>
            <MainNavigation></MainNavigation>
            <main className = {classes.main}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
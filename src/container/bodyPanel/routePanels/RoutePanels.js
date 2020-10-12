
import React from "react";
import {routes} from '../../../static/data/routes';
import './RoutePanels.css';
import TabPanel from './tabPanel/TabPanel'

export default function RoutePanels(props) {

    const {value} = props;

    return (
        <React.Fragment>
            {routes.map((route,i)=> {
                return  <TabPanel key={i} value={value} index={i}>
                            {<route.Component {...props}/>}
                        </TabPanel>
            })}
        </React.Fragment>
    );
}
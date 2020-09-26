import React from 'react';
import './Summary.css';
import Divider from '@material-ui/core/Divider';


export default function InfoComponent(props){
    return (
        <React.Fragment>
            <span className = "aboutSummary">SUMMARY</span>
            <Divider className="summaryLine"/>
        </React.Fragment>
    );
}
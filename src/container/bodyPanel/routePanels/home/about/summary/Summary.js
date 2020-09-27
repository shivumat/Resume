import React from 'react';
import './Summary.css';
import Divider from '@material-ui/core/Divider';

const yearDiff = (d1) => {
    var d2 = new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export default function InfoComponent(props){
    return (
        <React.Fragment>
            <span className = "aboutSummary">SUMMARY</span>
            <Divider className="summaryLine"/>
            <div className="summary">
                Result-oriented developer, with {yearDiff(new Date('10/23/2017'))} years experience of
                best industry practices in web, desktop and software applications. Sportsperson at heart,
                so keep team spirit as the top priority and aim at finishing goals by giving more than my
                100%, keeping in mind to always have fun while at it. 
            </div>
        </React.Fragment>
    );
}
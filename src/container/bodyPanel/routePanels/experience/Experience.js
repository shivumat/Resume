import React from 'react';
import './Experience.css';
import CompanyInfo from './company/CompanyInfo';
import companyInfo from '../../../../static/data/experience';

export default function Experience()
{
    const [expanded, setExpanded] = React.useState(false);
    const [index, setIndex] =   React.useState(0);

    const handleExpandClick = (currentIndex) => {
        if(currentIndex === index){            
            setExpanded(!expanded);
        }else{
            setIndex(currentIndex);
            if(!expanded){
                setExpanded(true);
            }
        }
      };

    return (
        <div className="experience">
            <div className="experienceHeader">
                Experience
            </div>
            {companyInfo.map((item,i) => <CompanyInfo key={i} companyInfo={item} index={i+1} 
                        expanded = {expanded && index===(i+1)} handleExpandClick={handleExpandClick}/>)}
        </div>
    )
}
 
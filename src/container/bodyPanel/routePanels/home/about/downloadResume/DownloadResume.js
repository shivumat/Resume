import React from 'react';
import Button from '@material-ui/core/Button';
import './DownloadResume.css'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import resume from '../../../../../../static/files/Mathur_Shivank.pdf';

export default function Downloadresume(){
    return(
        <a className="downloadAnchor" href={resume} download="Mathur_Shivank">
            <Button variant="outlined" size="small" className="download" startIcon={<CloudDownloadIcon />}>
                Click To Download Resume As PDF
            </Button>
        </a>
    );
}


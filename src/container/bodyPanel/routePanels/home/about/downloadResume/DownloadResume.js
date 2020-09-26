import React from 'react';
import Button from '@material-ui/core/Button';
import './DownloadResume.css'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


export default function Downloadresume(){
    return(
        <Button variant="outlined" size="small" className="download" startIcon={<CloudDownloadIcon />}>
            Click To Download Resume As PDF
      </Button>
    );
}


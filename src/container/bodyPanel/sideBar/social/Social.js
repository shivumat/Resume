import React from 'react';
import Link from '@material-ui/core/Link';
import social from '../../../../static/data/social';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './Social.css'

export default function Social(){

    return (<ButtonGroup variant="text" aria-label="text button group">
        {social.map((item,i) =><Button key={i}><Link title={item.title} href={item.link}>{<item.icon className="socialIcon"/>}</Link></Button>)}
        </ButtonGroup>
    )
}
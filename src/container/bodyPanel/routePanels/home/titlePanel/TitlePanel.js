import React from 'react';
import './TitlePanel.css';
import MyCard from './myCard/MyCard';
import Title from './title/Title';

export default function TitlePanel() {
  return (
    <div className="titlePanel">
        <div className="myCard"><MyCard/></div>
        <Title/>
    </div>
  );
}


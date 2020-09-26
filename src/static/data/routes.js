import React from 'react';
import Home from '../../container/bodyPanel/routePanels/home/Home';
import About from '../../container/bodyPanel/routePanels/home/about/About'

export default [
    {
        "path"    :   "/",
        "label"   :   "Home",
        "Component"   :   <Home/>
    },
    {
        "path"    :   "/Projects",
        "label"   :   "Projects",
        "Component"   :   <About/>
    },
    {
        "path"    :   "/Skills",
        "label"   :   "Skills",
        "Component"   :   <Home/>
    },
    {
        "path"    :   "/Experience",
        "label"   :   "Experience",
        "Component"   :   <Home/>
    },
    {
        "path"    :   "/Education",
        "label"   :   "Education",
        "Component"   :   <Home/>
    }
]
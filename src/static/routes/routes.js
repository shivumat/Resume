import React from 'react';
import Home from '../../container/home/Home';
import About from '../../container/about/About'

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
    },
    {
        "path"    :   "/Contact",
        "label"   :   "Contact",
        "Component"   :   <Home/>
    }
]
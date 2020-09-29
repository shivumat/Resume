import React from 'react';
import Home from '../../container/bodyPanel/routePanels/home/Home';
import About from '../../container/bodyPanel/routePanels/home/about/About';
import Projects from '../../container/bodyPanel/routePanels/projects/Projects';

export const routes = [
    {
        "path"    :   "/",
        "label"   :   "Home",
        "Component"   :   <Home/>
    },
    {
        "path"    :   "/Projects",
        "label"   :   "Projects",
        "Component"   :   <Projects/>
    },
    {
        "path"    :   "/Skills",
        "label"   :   "Skills",
        "Component"   :   <About/>
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

export const extraRoutes = [
    {
        "path"    :   "/Projects/:skill",
        "Component"   :   <Projects/>
    }
]
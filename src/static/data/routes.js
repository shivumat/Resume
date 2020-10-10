import Home from '../../container/bodyPanel/routePanels/home/Home';
import About from '../../container/bodyPanel/routePanels/about/About';
import Projects from '../../container/bodyPanel/routePanels/projects/Projects';
import Skills from '../../container/bodyPanel/routePanels/skills/Skills';

export const routes = [
    {
        "label"   :   "Home",
        "Component"   :   Home
    },
    {
        "label"   :   "Projects",
        "Component"   :   Projects
    },
    {
        "label"   :   "Skills",
        "Component"   :   Skills
    },
    {
        "label"   :   "About",
        "Component"   :   About
    }
]
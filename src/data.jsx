import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { IoMdTimer } from "react-icons/io";
import { TiVideo } from "react-icons/ti";
import { FaSquarePlus } from "react-icons/fa6";
import { AiFillSchedule, AiFillProfile } from "react-icons/ai";


export  const sidebar = [
    {
        name:"Overview",
        route:"/",
        activeRoutes:['/'],
        icon:<MdSpaceDashboard/>,
    },
    {
        name:"Schedule",
        route:"/new-meeting",
        activeRoutes:['/new-meeting'],
        icon:<VscGitPullRequestNewChanges/>,
    },
    {
        name:"Meetings",
        route:"/meetings",
        activeRoutes:['/meetings'],
        icon:<IoMdTimer/>,
    },
    {
        name:"Profile",
        route:"/profile",
        activeRoutes:['/profile'],
        icon:<FiUsers/>,
    },
]


export const navButtonsRoutes = [
    {
        name:'New Meeting',
        route:'/new-meeting',
        icon:<TiVideo/>,
        color:'rgb(250,116,67)',
    },
    {
        name:'Start meeting',
        route:`/join/23ddff`,
        icon:<FaSquarePlus/>,
        color:'var(--gradient-1)',
        target:'_blank',
    },
    {
        name:'Schedule',
        route:'/new-meeting',
        icon:<AiFillSchedule/>,
        color:'var(--gradient-1)',
    },
    {
        name:'Profile',
        route:'/profile',
        icon:<AiFillProfile/>,
        color:'var(--gradient-1)',
    },
]
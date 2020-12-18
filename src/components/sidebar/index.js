import React, { useState } from 'react';
import icons from '../../icons';

const {
    KeyboardArrowRightIcon,
    KeyboardArrowLeftIcon,
    HomeOutlinedIcon,
    WorkOutlineOutlinedIcon,
    SentimentVerySatisfiedOutlinedIcon
} = icons;

const styles = {
    sidebar: {
        height: '100vh',
        textAlign: 'right',
        backgroundColor: '#00adb5',
        width: '4%',
        transition: 'width 0.5s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #5B86E5, #36D1DC)'
    },

    menuItemWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    iconContainer: {
        textAlign: 'center',
        width: '100%',
        transition: 'width 0.5s, text-align 0.5s',
    },

    navTextContainer: {
        textAlign: 'left',
        fontSize: '0em',
        width: '0%',
        marginLeft: '0px',
        transition: 'font-size 0.5s, width 0.5s, margin-left 0.5s',
    }
};

const menuSections = [
    {
        name: 'Home',
        icon: HomeOutlinedIcon
    },

    {
        name: 'Work',
        icon: WorkOutlineOutlinedIcon
    },

    {
        name: 'About',
        icon: SentimentVerySatisfiedOutlinedIcon
    }
]

const Sidebar = () => {

    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };


    return (
        <div style={sidebarExpanded ? { ...styles.sidebar, width: '10%' } : styles.sidebar}>
            {sidebarExpanded ?
                <KeyboardArrowLeftIcon style={{ alignSelf: 'flex-end' }} onClick={toggleSidebar} /> :
                <KeyboardArrowRightIcon style={{ alignSelf: 'flex-end' }} onClick={toggleSidebar} />
            }

            {menuSections.map((section, index) => {
                return (
                    <div style={styles.menuItemWrapper} key={index}>
                        <div style={sidebarExpanded ? { ...styles.iconContainer, width: '50%' } : styles.iconContainer}><section.icon style={{ fontSize: '2em' }} /></div>
                        <div style={sidebarExpanded ? { ...styles.navTextContainer, width: '50%', fontSize: '1em', marginLeft: '-10%' } : styles.navTextContainer}>{section.name}</div>
                    </div>
                );
            })}

        </div>
    );
};

export default Sidebar;
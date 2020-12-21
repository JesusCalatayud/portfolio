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
        width: '100%',
        padding: '10px',
        transition: 'width 0.5s'
    },

    menuItemHover: {
        color: 'black',
        backgroundColor: 'white',
        cursor: 'pointer'
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
    },

    navTextExpanded: {
        width: '100%',
        fontSize: '1em',
        fontWeight: 'bold',
        marginLeft: '-8%'
    },

    expandIcon: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: '0'
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
    const [navHover, setNavHover] = useState({ index: null, hover: false });

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    const navHoverHandler = (event, index) => {
        event.type === 'mouseenter' ?
            setNavHover({ index: index, hover: true }) :
            setNavHover({ index: null, hover: false });
    };

    return (
        <div style={sidebarExpanded ? { ...styles.sidebar, width: '15%', alignItems: 'flex-end' } : styles.sidebar}>
            {sidebarExpanded ?
                <KeyboardArrowLeftIcon style={styles.expandIcon} onClick={toggleSidebar} /> :
                <KeyboardArrowRightIcon style={styles.expandIcon} onClick={toggleSidebar} />
            }

            {menuSections.map((section, index) => {
                return (
                    <div
                        onMouseEnter={(e) => navHoverHandler(e, index)}
                        onMouseLeave={(e) => navHoverHandler(e, index)}
                        style={sidebarExpanded && navHover.index === index ?
                            { ...styles.menuItemWrapper, width: '80%', ...styles.menuItemHover, borderRadius: '30px 0px 0px 30px' } :
                            sidebarExpanded && navHover.index !== index ?
                                { ...styles.menuItemWrapper, width: '80%' } :
                                navHover.index === index ?
                                    { ...styles.menuItemWrapper, ...styles.menuItemHover } :
                                    styles.menuItemWrapper
                        }
                        key={index}>
                        <div
                            style={sidebarExpanded ?
                                { ...styles.iconContainer, width: '100%' } :
                                styles.iconContainer}>
                            <section.icon
                                style={{
                                    fontSize: '2em', color: navHover.hover && navHover.index === index ?
                                        '#5B86E5' :
                                        'inherit'
                                }} />
                        </div>
                        <div
                            style={sidebarExpanded ?
                                { ...styles.navTextContainer, ...styles.navTextExpanded } :
                                styles.navTextContainer}>
                            {section.name}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
import React, { useState } from 'react';
import { ReactComponent as Flatjesus } from '../../images/svg/flatjesus.svg';


const styles = {
    introductionText: {
        margin: '0',
        fontSize: '4em',
        fontWeight: '900',
        letterSpacing: '-2px',
        lineHeight: '90%'
    },

    contactMeButton: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 'bold',
        border: '2px solid #5B86E5',
        backgroundColor: 'transparent',
        color: '#5B86E5',
        borderRadius: '50px',
        padding: '10px',
        fontSize: '1em'
    },

    contactMeButtonHover: {
        cursor: 'pointer',
        backgroundColor: '#5B86E5',
        color: 'white'
    }
};

const Home = () => {

    const [contactButtonHover, setContactButtonHover] = useState(false);

    const toggleContactButtonHover = () => {
        setContactButtonHover(!contactButtonHover);
    };

    return (
        <section>
            <p style={styles.introductionText}>
                Hi there!<br />
                I'm Jesús Calatayud<br />
                <span
                    style={{
                        backgroundImage: 'linear-gradient(to right, #5B86E5, #36D1DC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Front End Developer</span>
            </p>
            <p style={{ width: '42%', textAlign: 'justify' }}>
                I'm looking forward to find a new opportunity to continue working as a Front-End Developer. I'm into the client side since allows me to hone my skills in both of my main passions, programming and graphic design. Also I'd like to confess I'm actually an Apple fanboy, that's the reason why I'm studying Swift by my own. I love learning new stuff and I always seize my time as much as I can.
            </p>
            <button style={contactButtonHover ? { ...styles.contactMeButton, ...styles.contactMeButtonHover } : styles.contactMeButton} onMouseEnter={() => toggleContactButtonHover()} onMouseLeave={() => toggleContactButtonHover()}>Contact me</button>

            <div style={{ position: 'absolute', right: '0', top: '0' }}><Flatjesus style={{ width: '600px' }} /></div>
        </section>
    );
};

export default Home;
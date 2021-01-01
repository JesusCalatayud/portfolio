import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

const styles = {
    mainContainer: {
        textAlign: 'left',
        width: '100%',
        color: '#222831',
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const Main = () => {

    return (
        <div style={styles.mainContainer}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                </Switch>
        </div>
    );
};

export default Main;
import React, {Component} from 'react';
import styles from '../sign_up/sign_up.scss';
import Head from '../../components/Head';
import {data, } from '../../pages/sign_up/data';


/**
 * Renders  Sign Up Page
 * @returns {React.Component} React Component
 */
class SignUp extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <div>
                <Head title={data.title}/>
                <div className={styles.mainwrapper}>
                    <a className={styles.text}>Hello Sign_up</a>
                </div>
            </div>
        )
    }
}

export default SignUp;
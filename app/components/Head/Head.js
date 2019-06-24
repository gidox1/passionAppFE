import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const HeaderComponent = ({title, }) => (
    <Head>
        <title>
            {title}
        </title>
    </Head>
);
HeaderComponent.PropTypes = {
    title: PropTypes.string.isRequired
};

export default HeaderComponent;
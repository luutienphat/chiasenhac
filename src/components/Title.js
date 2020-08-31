import React from 'react';
import styles from './styles.module.css';

export default function (props) {
    return (
        <a href="google.com" className = {styles.Title}>{props.title}</a>
    )
}
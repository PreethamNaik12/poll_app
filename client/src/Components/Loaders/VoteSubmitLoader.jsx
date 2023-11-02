import React from 'react'
import styles from '../../assets/stylesheets/VoteSubmitLoader.module.css'

const VoteSubmitLoader = () => {
    return (
        <div class={styles.loader}>
            <div class={styles.bar1}></div>
            <div class={styles.bar2}></div>
            <div class={styles.bar3}></div>
            <div class={styles.bar4}></div>
            <div class={styles.bar5}></div>
            <div class={styles.bar6}></div>
            <div class={styles.bar7}></div>
            <div class={styles.bar8}></div>
            <div class={styles.bar9}></div>
            <div class={styles.bar1}></div>
            <div class={styles.bar1}></div>
            <div class={styles.bar1}></div>
        </div>
    )
}

export default VoteSubmitLoader
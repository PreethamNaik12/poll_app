import React from 'react'
import styles from '../../assets/stylesheets/InitialLoader.module.css'

const InitialLoader = () => {
    return (
        <div class={styles.loader}>
            <div class={styles.circle}>
                <div class={styles.dot}></div>
                <div class={styles.outline}></div>
            </div>
            <div class={styles.circle}>
                <div class={styles.dot}></div>
                <div class={styles.outline}></div>
            </div>
            <div class={styles.circle}>
                <div class={styles.dot}></div>
                <div class={styles.outline}></div>
            </div>
            <div class={styles.circle}>
                <div class={styles.dot}></div>
                <div class={styles.outline}></div>
            </div>
        </div>
    )
}

export default InitialLoader
import React from 'react'
import styles from './Avatar.module.css'
export default function Avatar({src,size="50"}) {
    return (
        <div>
            <img src={src} alt="Avatar" class={styles.avatar}/>
        </div>
    )
}

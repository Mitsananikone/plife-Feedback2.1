import React from 'react';
import styles from './infoCard.module.css';

const InfoCard = ({ imageUrl, description, style, onClick, className }) => (
    <div style={style} className={styles.iCard}>
        {/* <div style={style} className={`${styles.tCard} ${className}`}> */}
        <div onClick={onClick}>
            <div className={styles.imgContainer}>
                <img
                    src={imageUrl}
                    alt={description}
                    className={styles.iCardImage}
                />
            </div>
            <div className={styles.iCardTitle}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>
)

export default InfoCard;

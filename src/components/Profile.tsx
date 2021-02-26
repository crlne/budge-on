import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}> 
            <img src="https://avatars.githubusercontent.com/u/69469286?s=460&u=bfe35ddfe213930518abe0bfaf9395011916229c&v=4" alt="Caroline Ferreira" />
            <div>
                <strong>Caroline Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                    </p>
            </div>
        </div>
    );
}
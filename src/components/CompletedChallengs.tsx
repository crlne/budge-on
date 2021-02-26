import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallengs.module.css';

export function CompletedChallengs() {
    const { challengesCompleted } = useContext(ChallengesContext);


    return (
        <div className={styles.completedChallengsContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}
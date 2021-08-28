import { useState } from 'react';
import styles from './ListItem.module.css';

export default function ListItem({ children, heading, sourceURL }) {
  const [expanded, setExpanded] = useState(false);

  let wrapperClasses = styles.wrapper;
  if (expanded) {
    wrapperClasses += ` ${styles.wrapperExpanded}`;
  }

  return (
    <div className={wrapperClasses}>
      <h2 className={styles.heading}>
        <button onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? '🟣' : '⚪️'}</span>
          <span>{heading}</span>
        </button>
      </h2>
      <p className={styles.content}>{children}</p>
      <a href={sourceURL} target='_blank'>Source</a>
    </div>
  );
}
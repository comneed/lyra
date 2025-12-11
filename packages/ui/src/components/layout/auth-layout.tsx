import * as React from 'react';
import { clsx } from 'clsx';
import styles from './auth-layout.module.css';

export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.Main}>
            <div className={styles.Container}>
                {children}
            </div>
        </main>
    );
}

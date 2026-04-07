import React from 'react'

interface MainContainerProps {
    children: React.ReactNode;
    centerText?: boolean;
}

const styles = {
    main: 'hero min-h-screen',
    heroContent: 'hero-content',
    maxWmd: 'max-w-md',
}

const MainContainer = ({ children, centerText = false }: MainContainerProps) => {
  return (
    <main className={styles.main}>
        <div className={`${styles.heroContent} ${centerText ? 'text-center' : ''}`}>
            <div className={styles.maxWmd}>
                {children}
            </div>
        </div>
    </main>
  )
}

export default MainContainer
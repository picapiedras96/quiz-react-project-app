import React from 'react'

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const styles = {
    button: 'btn btn-primary btn-md px-12 py-6 text-base rounded-2xl',
}

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}

export default PrimaryButton
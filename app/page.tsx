'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import MainContainer from 'components/MainContainer';
import PrimaryButton from 'components/PrimaryButton';

const styles = {
  title: 'text-3xl font-bold font-heading',
  description: 'py-6 text-base',
}

export default function Page() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/quizgame');
  };

  return (
      <MainContainer centerText={true}>
          <h1 className={styles.title}>Quizzical</h1>
          <p className={styles.description}>
            A fun little quiz game built with Next.js, Tailwind CSS and DaisyUI.
          </p>
          <PrimaryButton onClick={handleStartQuiz}>Start Quiz</PrimaryButton>
      </MainContainer>
  );
}
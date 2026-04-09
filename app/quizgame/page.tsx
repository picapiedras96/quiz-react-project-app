'use client';
import React, { useEffect } from 'react'
import getQuestionData from '@/utilities/getQuestionData';

/** requirements
 * start page
 * quiz page
 * pull 5 questions from API: https://opentdb.com/api_config.php
 * tally score and display at the end
 * restart button to start over
 * style incorrect and correct answers
 */

export default function Page() {
  async function fetchQuestionData() {
    const questionData = await getQuestionData();
    console.log("Question Data:", questionData);
  }

  useEffect(() => {
    fetchQuestionData();
  }, []);

  return (
    <div>Page</div>
  )
}
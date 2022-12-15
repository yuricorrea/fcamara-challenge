import {IAntFetch} from '../../types';

export const getAntData = async (): Promise<IAntFetch | undefined> => {
  try {
    const response = await fetch('https://sg-ants-test.herokuapp.com/ants');
    return response?.json();
  } catch (e) {
    return undefined;
  }
};

export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

import { useMemo } from 'react';
import portfolioData from '../data/portfolio.json';
import { PortfolioData } from '../types/portfolio';

export const usePortfolio = (): PortfolioData => {
  const data = useMemo(() => {
    return portfolioData as PortfolioData;
  }, []);

  return data;
};

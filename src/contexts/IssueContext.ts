import { createContext } from 'react';
import { TIssue } from '../types';

export const IssueContext = createContext<TIssue[] | undefined>(
  {} as TIssue[] | undefined
);

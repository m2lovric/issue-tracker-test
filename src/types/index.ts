type TIssue = {
  id: number;
  createdAt: Date;
  title: string;
  status: Status;
};

export enum Status {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export type { TIssue };

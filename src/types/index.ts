type TIssue = {
  id: number;
  createdAt: Date;
  title: string;
  status: Status;
  isDone: boolean;
};

enum Status {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export { TIssue, Status };

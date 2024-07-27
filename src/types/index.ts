interface TIssue {
  id: number;
  createdAt: Date;
  title: string;
  status: Status;
  isDone: boolean;
  userId: string;
}

interface TIssueForm {
  title: string;
  status?: Status;
  isDone?: boolean;
}

enum Status {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export { TIssue, TIssueForm, Status };

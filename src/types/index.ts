type Issue = {
  id: number;
  createdAt: Date;
  title: string;
  status: Status;
};

enum Status {
  LOW,
  MEDIUM,
  HIGH,
}

export type { Issue };

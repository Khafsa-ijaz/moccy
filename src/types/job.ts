export type CopyWritingStatus =
  | "requested"
  | "in progress"
  | "sent for review"
  | "completed"
  | "client rejected"
  | "canceled";

export interface Job {
  id: number;
  title: string;
  company: string;
  expiry: string;
  reference: string;
  status: CopyWritingStatus| string;
}


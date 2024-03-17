export type User = {
  _id: string;
  email: string;
  username: string;
  listOfHabits: string[];
  activityHistory: { habitName: string; timestamp: number; _id: string }[];
};

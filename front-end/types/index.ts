export type Exercise = {
  id?: number;
  name?: string;
  sets?: number;
  reps?: number;
}

export type Program = {
  id?: number;
  name?: string;
  days?: number;
  workouts?: Workout[];
}

export type Workout = {
  id?: number;
  name?: string;
  exercises?: Exercise[];
}

export type User = {
  firstName?: string;
  lastName?: string;
  fullname?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: string;
};

export type StatusMessage = {
  message: string;
  type: "error" | "success";
};
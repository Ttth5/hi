
export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
}

export interface GuidanceCard {
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface UserProfile {
  name: string;
  role: 'student' | 'parent' | 'teacher';
  grade: string;
  challengingSubjects: string[];
  goals: string;
  lastUpdated?: string;
}

// types/index.ts
export interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    credits: number;
    instructor: string;
  }
  
  export interface FacultyMember {
    id: number;
    name: string;
    title: string;
    education: string;
    specialization: string;
    bio: string;
  }
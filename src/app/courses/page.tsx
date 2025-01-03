// app/courses/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import { Course } from '@/types';

async function getCourses(): Promise<{ courses: Course[] }> {
  const filePath = path.join(process.cwd(), 'data', 'courses.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function CoursesPage() {
  const { courses } = await getCourses();
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Programs</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course: Course) => (
          <div 
            key={course.id}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="text-sm text-gray-500">
              <p>Duration: {course.duration}</p>
              <p>Credits: {course.credits}</p>
              <p>Instructor: {course.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
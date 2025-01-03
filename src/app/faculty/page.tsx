// app/faculty/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import { FacultyMember } from '@/types';

async function getFaculty(): Promise<{ faculty: FacultyMember[] }> {
  const filePath = path.join(process.cwd(), 'data', 'faculty.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function FacultyPage() {
  const { faculty } = await getFaculty();
  
  return (
    <main className="min-h-screen">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-slate-300">Learn from experienced scholars and practitioners</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member: FacultyMember) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-2 bg-slate-200">
                <div className="w-full h-48 flex items-center justify-center text-slate-400">
                  [Photo Placeholder]
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">{member.education}</p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Specialization: </span>
                  {member.specialization}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
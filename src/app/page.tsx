// app/page.tsx
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { Course, FacultyMember } from '@/types';

async function getData(): Promise<{
  courses: Course[];
  faculty: FacultyMember[];
}> {
  const coursesPath = path.join(process.cwd(), 'data', 'courses.json');
  const facultyPath = path.join(process.cwd(), 'data', 'faculty.json');

  const [coursesData, facultyData] = await Promise.all([
    fs.readFile(coursesPath, 'utf8'),
    fs.readFile(facultyPath, 'utf8')
  ]);

  return {
    courses: JSON.parse(coursesData).courses,
    faculty: JSON.parse(facultyData).faculty
  };
}

export default async function Home() {
  const { courses, faculty } = await getData();
  const featuredCourses = courses.slice(0, 2);

  return (
    <main>
      {/* Hero Section with Modern Gradient */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Transform Your Calling Into Ministry
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover deep theological education grounded in scripture
          </p>
          <Link 
            href="/courses" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-600 inline-block font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Programs
          </Link>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Biblical Foundation</h3>
              <p className="text-slate-600">Rigorous study of scripture and theology in their original context</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
              <p className="text-slate-600">Learn from {faculty.length} experienced professors and scholars</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Diverse Programs</h3>
              <p className="text-slate-600">Choose from {courses.length} specialized courses and programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-4 text-slate-900">{course.title}</h3>
                <p className="text-slate-600 mb-4">{course.description}</p>
                <div className="text-sm text-slate-500 mb-6 space-y-2">
                  <p className="flex items-center">
                    <span className="w-20 font-medium">Duration:</span> {course.duration}
                  </p>
                  <p className="flex items-center">
                    <span className="w-20 font-medium">Credits:</span> {course.credits}
                  </p>
                  <p className="flex items-center">
                    <span className="w-20 font-medium">Instructor:</span> {course.instructor}
                  </p>
                </div>
                <Link 
                  href="/courses" 
                  className="text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-transform duration-200 inline-flex items-center"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Preview with Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learn from Expert Faculty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.slice(0, 3).map((member) => (
              <div 
                key={member.id} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-center group border border-slate-100"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-blue-400 text-2xl">[Photo]</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.title}</p>
                <p className="text-sm text-slate-600">{member.specialization}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/faculty" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
            >
              View All Faculty 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Modern Gradient */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey Today</h2>
          <p className="text-xl mb-8 text-blue-100">Take the next step in your calling to ministry</p>
          <Link 
            href="/courses" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-600 inline-block font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Programs
          </Link>
        </div>
      </section>
    </main>
  );
}
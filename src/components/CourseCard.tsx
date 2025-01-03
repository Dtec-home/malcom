// components/CourseCard.tsx
interface CourseProps {
    title: string;
    description: string;
    duration: string;
    credits: number;
    instructor: string;
  }
  
  export default function CourseCard({ title, description, duration, credits, instructor }: CourseProps) {
    return (
      <div className="border rounded-lg p-6 hover:shadow-lg transition bg-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500 space-y-1">
          <p className="flex items-center">
            <span className="font-medium w-20">Duration:</span> 
            {duration}
          </p>
          <p className="flex items-center">
            <span className="font-medium w-20">Credits:</span> 
            {credits}
          </p>
          <p className="flex items-center">
            <span className="font-medium w-20">Instructor:</span> 
            {instructor}
          </p>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    );
  }
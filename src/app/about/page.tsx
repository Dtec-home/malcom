// app/about/page.tsx
export default function AboutPage() {
    return (
      <main className="min-h-screen">
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Grace Theological Seminary</h1>
            <p className="text-xl text-slate-300">Building faithful servants for God&apos;s kingdom since 1950</p>
          </div>
        </section>
  
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Grace Theological Seminary exists to educate, equip, and empower the next generation of Christian leaders 
                through rigorous academic study and spiritual formation.
              </p>
              <p className="text-gray-600">
                We are committed to providing a comprehensive theological education that combines academic excellence 
                with practical ministry experience, all within a vibrant community of faith.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold mr-2">Biblical Truth:</span>
                  Upholding the authority and inspiration of Scripture
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Academic Excellence:</span>
                  Pursuing rigorous scholarship and intellectual growth
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Spiritual Formation:</span>
                  Fostering personal growth and spiritual maturity
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Ministry Preparation:</span>
                  Equipping students for effective Christian service
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Our History</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 1950, Grace Theological Seminary began with a vision to provide sound theological 
                education that would equip men and women for ministry in a rapidly changing world. What started 
                with just 12 students has grown into a thriving seminary community of over 500 students from 
                around the globe.
              </p>
              <p className="text-gray-600">
                Today, we continue to build on this rich heritage while embracing innovative approaches to 
                theological education. Our commitment to academic excellence, spiritual formation, and practical 
                ministry training remains unchanged as we prepare the next generation of Christian leaders.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
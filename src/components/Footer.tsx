// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Malcom Theological Seminary</h3>
            <p className="text-slate-300">
              Transforming lives through biblical education and spiritual formation.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
              <li><Link href="/courses" className="text-slate-300 hover:text-white">Programs</Link></li>
              <li><Link href="/faculty" className="text-slate-300 hover:text-white">Faculty</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>123 Seminary Drive</li>
              <li>Malcom City, ST 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@Malcomseminary.edu</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="space-y-2 text-slate-300">
              <p>Follow us on social media for updates and inspiration.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; {new Date().getFullYear()} Malcom Theological Seminary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
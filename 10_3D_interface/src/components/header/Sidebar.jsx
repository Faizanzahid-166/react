import {Link} from 'react-router'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#202123] text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6">3D Project Lists</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/ThreeScene" className="bg-[#2c2d30] px-4 py-3 rounded hover:bg-[#3a3b3e] text-left">
          Cube Box
        </Link>

         <Link to="/Solarsystem" className="bg-[#2c2d30] px-4 py-3 rounded hover:bg-[#3a3b3e] text-left">
          Solar System
        </Link>
        <Link to="/ProductScene" className="bg-[#2c2d30] px-4 py-3 rounded hover:bg-[#3a3b3e] text-left">
          Product Viewer
        </Link>
           <Link to="/GlobeWithMoon" className="bg-[#2c2d30] px-4 py-3 rounded hover:bg-[#3a3b3e] text-left">
          Earth Moon
        </Link>
      </nav>
    </div>
  );
}

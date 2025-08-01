import { Link } from "react-router-dom";

interface SubtleBorderLinkProps {
  to: string;
  children: React.ReactNode;
}

function SubtleBorderLink({ to, children }: SubtleBorderLinkProps) {
  return (
      <Link to={to} className="group relative text-gray-400 hover:text-white transition-colors duration-300">
      <span className="relative z-10 px-4 py-2">
        {children}
      </span>
     
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
    </Link>
  )
}

export default SubtleBorderLink
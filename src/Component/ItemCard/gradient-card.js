import { Link } from "react-router-dom";

import mainButtom from "../../Assets/buttonhome.png"
export function GradientCard({ icon, title, description, gradient,link,Projector }) {
  return (
  
    <Link
     to={link} 
      className=" bg-contain   w-96  bg-no-repeat bg-center  rounded-3xl p-8 flex flex-col h-96 "
      style={{
        backgroundImage: `url(${mainButtom})`,
      }}
    >

      {/* Icon with gradient background */}
      <div className="mb-6 flex justify-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
         
        >
          <img
            src={icon}
            alt={title}
            className="w-12 rounded-full h-12 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1  flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{title}</h3>
        <p className="text-sm text-[#1F1F1F] text-center mb-2 ">{description}</p>
        <p className="text-sm text-[#DD9E9B] text-center flex-1 ">{Projector}</p>

        
      </div>

    </Link>
  
  );
}

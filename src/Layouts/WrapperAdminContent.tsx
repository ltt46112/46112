import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IWrapperAdminContentProps {
  children: ReactNode;
}

const WrapperAdminContent = ({ children }: IWrapperAdminContentProps) => {
  return (
    <>
      <div className="flex items-center gap-x-3 bg-black">
        <li className="p-3 list-none">
          <NavLink to="/admin" className="text-white">
            Dashboard
          </NavLink>
        </li>

        <li className="p-3 list-none">
          <NavLink to="/admin/questions" className="text-white">
            Question Management
          </NavLink>
        </li>

        <li className="p-3 list-none">
          <NavLink to="/admin/configs" className="text-white">
            Config Management
          </NavLink>
        </li>

        <li className="p-3 list-none">
          <NavLink to="/admin/play-history" className="text-white">
            Play History
          </NavLink>
        </li>
      </div>

      <main className="container mx-auto mt-4 p-3">{children}</main>
    </>
  );
};

export default WrapperAdminContent;

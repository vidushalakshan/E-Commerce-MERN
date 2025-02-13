import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {

    const user = useSelector((state) => state.user.user);
    
  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
      <aside className='w-full min-h-full bg-white max-w-60 customShadow'>
        <div className='flex flex-col items-center justify-center h-32'>
          <div
            className='relative flex justify-center text-5xl cursor-pointer'
          >
            {user?.profilepic ? (
              <img
                src={user.profilepic}
                alt="User Profile"
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className="text-lg font-semibold capitalize">{user?.name}Vidusha Lakshan</p>
        </div>

            {/* navigation */}
        <div>
            <nav className="grid p-4">
                <Link to={"all-users"}className="px-2 py-1 hover:bg-slate-100">All Users</Link>
                <Link to={"all-product"}className="px-2 py-1 hover:bg-slate-100">All Product</Link>
            </nav>
        </div>
      </aside>
            
      <main><Outlet/></main>
    </div>
  );
};

export default AdminPanel;
import React from "react";
// {/* <div className="drawer lg:drawer-open">
//   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content flex flex-col items-center justify-center">
//     {/* Page content here */}
//     <label
//       htmlFor="my-drawer-2"
//       className="btn btn-primary drawer-button lg:hidden">
//       Open drawer
//     </label>
//   </div>
//   <div className="drawer-side">
//     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       {/* Sidebar content here */}
//       <li>
//         <a>Sidebar Item 1</a>
//       </li>
//       <li>
//         <a>Sidebar Item 2</a>
//       </li>
//     </ul>
//   </div>
// </div>; */}

function Header() {
  return (
    <div
      className="navbar  bg-[#fff]   sticky top-0   opacity-90"
      style={{ zIndex: 100 }}>
      <div className="navbar-start bg-[#fff]">
        <label
          tabIndex={0}
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden btn-ghost hover:cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <div className=" w-24 "></div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end mr-4">
        <div className=" w-24 lg:hidden md:hidden "></div>
      </div>
    </div>
  );
}



export default function Layout({ children }) {
  return (
    <div className="  w-full  h-[100vh]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {<Header />}
          {children}
        </div>
        <div className="drawer-side" style={{ zIndex: 999 }}>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p w-80 h-[100vh] text-base-content sticky top-0  bg-[#fff]">
            <label
              tabIndex={0}
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden btn-ghost hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

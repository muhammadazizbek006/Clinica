import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumps = () => {
  const location = useLocation();
  const pathe = location.pathname.replaceAll("%20", " ");
  location.pathname = pathe;
  const path = location.pathname.split("/");
  const filterArr = path.filter(
    (path) =>
      path !== "" && path !== "sotib-olish" && path !== "sale" && path !== "car"
  );
  return (
    <div className="w-full flex items-center  containerb">
      <ul className="flex  space-x-2 xl:space-x-5 vercel my-5 w-[96%] lg:w-[1300px]">
        <li>
          <Link to={"/"} className="text-header">
            Bosh sahifa 
          </Link>
        </li>

        {filterArr.map((path, index) => {
          return (
            <li key={index}>
              {index !== filterArr.length - 1 ? (
                <Link className="text-header" to={path }>
                  {`${path}`}
                </Link>
              ) : (
                path
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumps;

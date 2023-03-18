import React from "react";

function Header({ styleh1, styleh2 }) {
  return (
    <div className="text-left mr-40  left-48">
      <h1 className={styleh1}>Prismatic </h1>
      <h1 className={styleh2}> &#47;&#47; Subversion Vinyls</h1>
    </div>
  );
}

export default Header;

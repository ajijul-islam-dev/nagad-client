import React from "react";

function PageBanner() {
  return (
    <div
      style={{
        background: "url(./assets/images/home.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full relative"
    >
      <img
        src="/assets/images/nagad-bg.png"
        className="absolute bottom-0 right-0"
      />
      <img src="/assets/images/textLogo.png" className="block mx-auto py-16" />
    </div>
  );
}

export default PageBanner;

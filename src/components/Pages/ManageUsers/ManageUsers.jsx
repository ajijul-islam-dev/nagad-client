import React from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";

function ManageUsers() {
  return (
    <div>
      <PageBanner />
      <div className="text-center">
        <div role="tablist" className="tabs tabs-bordered w-full tabs-lg">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab w-full"
            aria-label="Tab 1"
          />
          <div role="tabpanel" className="tab-content p-10 w-full">
            Tab content 1
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab w-full"
            aria-label="Tab 3"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;

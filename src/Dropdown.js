import React from 'react';
import DropDownMenuSelect from "react-nested-menu-selector";


const option = {
  placeholder: "Master",
  options: [
    {
      value: "Sample-Menu",
      label: "Sample-Menu",
      hidden: false,
      logo: "path_to_logo",
      options: [
        {
          value: "Sample-Sub-Menu",
          label: "Sample-Sub-Menu",
          hidden: false,
          logo: "path_to_logo",
          options: [
            {
              value: "Sub-Menu-Option-1",
              label: "Sub-Menu-Option-1",
              hidden: false,
              logo: "path_to_logo",
            },
            {
              value: "Sub-Menu-Option-2",
              label: "Sub-Menu-Option-2",
              hidden: true,
              logo: "path_to_logo",
            },
          ],
        },
      ],
    },
  ],
};

function Dropdown() {
  return (
    <div>
      <div>Test Application</div>
      <div>
        <DropDownMenuSelect option={option} />
      </div>
    </div>
  );
}

export default Dropdown;

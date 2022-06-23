let NICHE = [
  {
    Price: "$1200 spent",
    displayName: "Home & UTILITIES",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  },
  {
    Price: "$500 spent",
    displayName: "Travel",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  },
  {
    Price: "$430 spent",
    displayName: "Ride SHARING",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  },
  {
    Price: "$132 spent",
    displayName: "DRINK",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  },
  {
    Price: "$2730 spent",
    displayName: "GROCERIES",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  },

  {
    Price: parseInt("2730"),
    displayName: "RENT",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  },
];

import React, { createContext, useState } from "react";
import axios from "axios";

export const UserDataContext = createContext({
  NICHE: [],
  addNewItem: () => {},
  addPrice: () => {},
  fn: () => {},
});

function Context({ children }) {
  const [item, setitem] = useState(NICHE);

  const value = {
    NICHE: item,
    addNewItem: (obj) => {
      setitem((currents) => {
        return [...currents, obj];
      });
    },
    addPrice: (index, added) => {
      setitem(item[index].Price + added);
    },
    fn: async () => {
      await axios.post(
        "https://test-9af07-default-rtdb.firebaseio.com/data.json",
        {
          array: item,
        }
      );
    },
  };
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

export default Context;

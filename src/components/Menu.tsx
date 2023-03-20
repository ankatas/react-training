import { Link, NavLink } from "react-router-dom";
import "./Menu.css";

interface NavItem {
  id: string;
  title: string;
  href: string;
}

const items: NavItem[] = [
  {
    id: "4fcc897a-a949-40fe-b0be-607edc09da55",
    title: "Home",
    href: "/",
  },
  {
    id: "f39cec40-5599-473c-88e9-51b63016f0d5",
    title: "Users",
    href: "/users",
  },
  {
    id: "f58b9908-062b-4b9f-a568-42624c4a8d2a",
    title: "User 1",
    href: "/users/1",
  },
  {
    id: "ec496ed5-bf7b-4118-87f6-89773a7f192c",
    title: "Other",
    href: "/other",
  },
];

function Menu() {
  // TODO: Map the items to <a> elements. Replace [] with your code.
  const links = items.map((item) => (
    <NavLink
      key={item.id}
      to={item.href}
      end
      style={({ isActive }) => {
        if (isActive) {
          return {
            backgroundColor: "green",
          };
        }

        return {};
      }}
    >
      {item.title}
    </NavLink>
  ));

  return <nav className="Menu">{links}</nav>;
}

export default Menu;

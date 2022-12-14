import { slide as Menu } from "react-burger-menu";

// eslint-disable-next-line
export default (props:any) => {
  // eslint-disable-next-line
  const {  } = props;
  return (
    <Menu>
      <a className="menu-item" href="/Home">
        About us
      </a>
      <a className="menu-item" href="/Home">
        Pricing
      </a>
      <a className="menu-item" href="/Home">
        Contact
      </a>
    </Menu>
  );
};

import React from "react";
import { Menu } from "antd";

interface IProps {}
class UserMenu extends React.Component<IProps> {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.querypie.com/"
          >
            QueryPie
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.sqlgate.com/"
          >
            SQLGate
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.chequer.io/"
          >
            CHEQUER
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default UserMenu;

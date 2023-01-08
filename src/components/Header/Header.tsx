import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import { HeaderStyled, SubHeader } from "./Header.styled";

// components
import Search from "../Search";
import HeaderCart from "../HeaderCart";
import ShopList from "../ShopList";

// hook
import { ShopContext } from "../../contexts/ShopContext";

const Header = ({ pageTitle, setTheme, theme }) => {
  const shopContext = useContext(ShopContext);
  const { cart, total } = shopContext;

  return (
    <>
      <HeaderStyled id="header">
        <div className="mobile">
          <div className="wrapper">
            <div className="brand start-xs">
              <Link to="/">{pageTitle}</Link>
            </div>

            <HeaderCart items={cart} total={total} />
          </div>

          <div className="search-wrapper">
            <Search />
          </div>
        </div>

        <div className="desktop">
          <div className="wrapper container-fluid">
            <div className="brand start-xs">
              <Link to="/">{pageTitle}</Link>
            </div>

            <div className="search-wrapper">
              <Search />
            </div>

            <HeaderCart items={cart} total={total} />
          </div>
        </div>
      </HeaderStyled>

      <SubHeader>
        <ShopList setTheme={setTheme} theme={theme} />
      </SubHeader>
    </>
  );
};

export default Header;

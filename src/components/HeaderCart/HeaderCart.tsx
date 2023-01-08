import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// components
import Cart from "../Cart";
import ShadowStyled from "../Shadow";

// utils
import GroupArrayByKey from "../../utils/GroupArrayByKey";
import SmoothScrollTo from "../../utils/SmoothScrollTo";

// styles
import {
  HeaderCartStyled,
  HeaderCartButton,
  CartModal,
} from "./HeaderCart.styled";

export default function HeaderCart({ items, total }) {
  const node = useRef();

  const [isOpen, setIsOpen] = useState(true);
  const [formattedArray, setFormattedArray] = useState([]);

  const emptyCart = useMemo(() => {
    if (items.length > 0) {
      return false;
    }

    return true;
  }, [items]);

  const smoothScroll = useCallback(() => {
    SmoothScrollTo("header");
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    const grouped = GroupArrayByKey(items, "id");
    const groupedArray = Object.values(grouped).map((item) => ({
      item: item[0],
      quantity: item.length,
    }));

    setFormattedArray(groupedArray);
  }, [items]);

  useEffect(() => {
    setIsOpen(true);
    smoothScroll("header");
  }, [formattedArray]);

  return (
    <HeaderCartStyled
      ref={node}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <HeaderCartButton className={isOpen ? "hover" : ""}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{items.length}</span>
      </HeaderCartButton>

      {isOpen && (
        <>
          <CartModal className={emptyCart ? "empty" : ""}>
            {emptyCart && <p>Your shop cart is empty.</p>}

            {!emptyCart && (
              <Cart
                list={formattedArray}
                title="name"
                price="base_experience"
                image="image"
                total={total}
              />
            )}
          </CartModal>

          <ShadowStyled onClick={() => setIsOpen(false)} />
        </>
      )}
    </HeaderCartStyled>
  );
}

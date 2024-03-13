// components/Button.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Button = ({ onClick, href, children, style }) => {
  const router = useRouter();

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      style={style}
      className="view-detailsbtn"
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { createContext, useState, useEffect } from "react";
// 1. createContext 함수를 사용해, Context 생성
export const CartContext = createContext();
// 2. Provider 컴포넌트 정의
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // 로컬 스토리지에서 장바구니 데이터를 가져옴
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // 장바구니 데이터가 변경될 때마다 로컬 스토리지에 저장
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

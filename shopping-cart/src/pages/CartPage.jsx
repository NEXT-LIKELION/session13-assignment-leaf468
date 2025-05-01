import React from "react";
import styled from "@emotion/styled";
import { GNB } from "../components/GNB";
import { GNB_TYPE } from "../constants/common";
import { ProductInCart } from "../components/ProductInCart";
import { useCartStore } from "../store/CartStore";
import { Box } from "../styles/StyleComponent";

function CartPage() {
    // 선택적 구독 방식으로 변경
    const cart = useCartStore((state) => state.cart);

    return (
        <div>
            <GNB type={GNB_TYPE.BACK} />
            <Container>
                <Title>장바구니</Title>
                <Box gap={10}>
                    {cart.length > 0 ? (
                        cart.map((product, index) => (
                            <ProductInCart key={index} product={product} />
                        ))
                    ) : (
                        <EmptyCart>장바구니가 비어 있습니다.</EmptyCart>
                    )}
                </Box>
            </Container>
        </div>
    );
}

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const EmptyCart = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 40px 0;
    color: #888;
`;

export default CartPage;

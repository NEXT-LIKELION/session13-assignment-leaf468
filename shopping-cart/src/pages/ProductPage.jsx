import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { GNB } from "../components/GNB";
import { GNB_TYPE, PRODUCTS } from "../constants/common";
import { Button } from "../components/Button";
import { useCartStore } from "../store/CartStore";

function ProductPage() {
    const { id } = useParams();
    const product = PRODUCTS[parseInt(id)];

    // 선택적 구독 방식으로 변경
    const cart = useCartStore((state) => state.cart);
    const setCart = useCartStore((state) => state.setCart);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <GNB type={GNB_TYPE.BACK} />

            <Container>
                <Title>{product.name}</Title>
                <Description>{product.description}</Description>

                <Button onClick={() => handleAddToCart(product)}>
                    장바구니에 추가
                </Button>
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

const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px;
`;

export default ProductPage;

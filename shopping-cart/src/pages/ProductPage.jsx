import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { GNB } from "components/GNB"; // GNB 컴포넌트 경로 확인 필요
import { GNB_TYPE, PRODUCTS } from "constants/common";
import { Button } from "components/Button"; // Button 컴포넌트 경로 확인 필요
import { CartContext } from "context/CartContext";

function ProductPage() {
    const { id } = useParams();
    const product = PRODUCTS[parseInt(id)];
    const { cart, setCart } = useContext(CartContext);

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

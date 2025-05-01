import { create } from "zustand";
export const useCartStore = create((set) => ({
    cart: [], //상태
    setCart: (newCart) => set({ cart: newCart }), //새로운 카트를 호출 + 리렌더링,
}));

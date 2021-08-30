import { useState } from 'react'
import { createContext } from 'react'
interface CartVisibilityContextValue {
    setCartVisibility: (visible: boolean) => any;
    value: boolean
}

const CartVisibiltyContext = createContext<CartVisibilityContextValue>({ setCartVisibility: (visible) => { }, value: false })

export default CartVisibiltyContext
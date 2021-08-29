import { PRIMARY } from 'config/colors';
import { Button, ShoppingCartIcon } from 'evergreen-ui';
import React from 'react';
interface Props {
    onClick: () => any
}
function AddToCartButton(props: Props) {
    return (<Button width='100%' onClick={props.onClick} size='large' color='white' backgroundColor={PRIMARY} appearance='primary' iconBefore={ShoppingCartIcon}>Add to Cart</Button>);
}
export default AddToCartButton
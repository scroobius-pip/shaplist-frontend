import { Su, No, PaStr, Pa, He } from 'components/Text'
import { Button, Pane, EyeOpenIcon, CogIcon, LinkIcon, TickIcon, majorScale, Card, Pill, StatusIndicator, minorScale, PlusIcon } from 'evergreen-ui'
import React from 'react'
import { BACKGROUND, PRIMARY, WHITE } from 'config/colors';
import { BusinessProfileImage, ProductCard } from 'components';
import { useSideSheet } from 'hooks';
import { EditProduct } from 'features/Modals';
import { EditProductProps } from 'features/Modals/EditProduct';

import AddProduct from 'features/Modals/AddProduct';
import Link from 'next/link';
import productMocks from 'utils/productMocks';





const Page = () => {
    const { WrappedComponent: EditProductSideSheet, toggleVisible: toggleEditProduct } = useSideSheet(EditProduct)
    const { WrappedComponent: AddProductSideSheet, toggleVisible: toggleAddProduct } = useSideSheet(AddProduct)
    return <Pane>
        <EditProductSideSheet />
        <AddProductSideSheet />
        <BusinessProfileImage url={'/food_background.jpg'} />
        <Pane padding={'2vw'}>
            <Pane paddingY={majorScale(2)}>
                <PaStr>Good Morning,</PaStr>
                <Su>Hero Cafe</Su>
            </Pane>
            <Pane >
                <Link href='b/sa'>
                    <Button size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={EyeOpenIcon}>
                        View Website
                    </Button>
                </Link>
                <Link href='dashboard/update-business'>
                    <Button size='large' width='100%' iconBefore={CogIcon} marginTop={majorScale(1)}>
                        Edit Profile Settings
                    </Button>
                </Link>
                <Button size='large' width='100%' iconBefore={LinkIcon} marginTop={majorScale(1)}>
                    Copy Website Url
                </Button>
            </Pane>
            <Pane paddingY={majorScale(4)}>
                <PaStr>Tasks to complete</PaStr>
                <Card border background={WHITE} marginTop={majorScale(1)} padding={majorScale(1)}>
                    <StatusIndicator padding={minorScale(1)} display='block' color="success"><span>Update your business details</span></StatusIndicator>
                    <StatusIndicator padding={minorScale(1)} display='block' color="warning"><span>Upload your first product</span></StatusIndicator>
                </Card>
            </Pane>

            <Pane paddingY={majorScale(1)}>
                <He>Products</He>
            </Pane>
            <Button onClick={() => toggleAddProduct(true, { onSubmit: () => { console.log('submitted') } })} size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={PlusIcon}>
                Add Product
            </Button>
            <Pane paddingY={majorScale(1)}>
                {productMocks.map((product) => {
                    return <Pane marginBottom={majorScale(1)}>
                        <ProductCard editable={() => toggleEditProduct(true, { product, onSubmit: () => console.log('submitted ' + product.name) })} product={product} />
                    </Pane>
                })}
            </Pane>
        </Pane>
        <style jsx global>
            {`
            body {
                background: ${BACKGROUND}
            }
            `}
        </style>
    </Pane>
}

export default Page
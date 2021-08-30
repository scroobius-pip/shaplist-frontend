import { Su, No, PaStr, Pa, He } from 'components/Text'
import { Button, Pane, EyeOpenIcon, CogIcon, LinkIcon, TickIcon, majorScale, Card, Pill, StatusIndicator, minorScale, PlusIcon } from 'evergreen-ui'
import React from 'react'
import { BACKGROUND, PRIMARY, WHITE, SHADOW, GREY } from 'config/colors';
import { BusinessProfileImage, ProductCard } from 'components';
import { useSideSheet } from 'hooks';
import { EditProduct } from 'features/Modals';
import { EditProductProps } from 'features/Modals/EditProduct';

import AddProduct from 'features/Modals/AddProduct';
import Link from 'next/link';
import productMocks from 'utils/productMocks';
import { ProductGrid } from 'components/ProductCard';





const Page = () => {
    const { WrappedComponent: EditProductSideSheet, toggleVisible: toggleEditProduct } = useSideSheet(EditProduct)
    const { WrappedComponent: AddProductSideSheet, toggleVisible: toggleAddProduct } = useSideSheet(AddProduct)
    return <Pane boxShadow={SHADOW}>
        <EditProductSideSheet />
        <AddProductSideSheet />
        <Pane >
            <BusinessProfileImage url={'/food_background.jpg'} />
        </Pane>

        <Pane
        // display='flex' justifyContent='center'
        >
            <Pane
                display='grid'

                // border
                padding={majorScale(2)}
                // borderRadius={majorScale(2)}
                // boxShadow={SHADOW}

                background={WHITE}
            // maxWidth='fit-content'
            >
                <Pane>
                    <Pane paddingY={majorScale(2)}>
                        <PaStr>Good Morning,</PaStr>
                        <Su>Hero Cafe</Su>
                    </Pane>
                    <Pane>
                        <Pane  >
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

                    </Pane>
                </Pane>
                <Pane marginTop={majorScale(3)}>
                    <Pane textAlign='left'>
                        <PaStr>Tasks to complete</PaStr>
                    </Pane>
                    <Card border background={WHITE} marginTop={majorScale(1)} padding={majorScale(1)}>
                        <StatusIndicator padding={minorScale(1)} display='block' color="success"><span>Update your business details</span></StatusIndicator>
                        <StatusIndicator padding={minorScale(1)} display='block' color="warning"><span>Upload your first product</span></StatusIndicator>
                    </Card>
                </Pane>
            </Pane>
        </Pane>


        <Pane background={WHITE} padding={'2vw'}>

            <Pane marginTop={majorScale(6)} gap={majorScale(1)} display='flex' justifyContent='space-between' >
                <Pane paddingY={majorScale(1)}>
                    <He>Products</He>
                </Pane>
                <Button maxWidth={400} onClick={() => toggleAddProduct(true, { onSubmit: () => { console.log('submitted') } })} size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={PlusIcon}>
                    Add Product
                </Button>
            </Pane>
            <Pane marginTop={majorScale(3)}>
                <ProductGrid>
                    {productMocks.map((product) => {
                        return <ProductCard editable={() => toggleEditProduct(true, { product, onSubmit: () => console.log('submitted ' + product.name) })} product={product} />

                    })}
                </ProductGrid>
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
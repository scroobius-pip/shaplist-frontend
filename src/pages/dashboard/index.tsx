import { Su, No, PaStr, Pa, He } from 'components/Text'
import { Button, Pane, EyeOpenIcon, CogIcon, LinkIcon, TickIcon, majorScale, Card, Pill, StatusIndicator, minorScale, PlusIcon } from 'evergreen-ui'
import React from 'react'
import { BACKGROUND, PRIMARY, WHITE } from 'config/colors';
import { ProductCard } from 'components';
import { useSideSheet } from 'hooks';
import { EditProduct } from 'components/Modals';
import { EditProductProps } from 'components/Modals/EditProduct';
import AddProduct from 'components/Modals/AddProduct';
const products: Product[] = [
    {
        name: 'Irish Potato (10kg)',
        slug: '/irish-pototo-10kg',

        imageUrl: '',

        // limitedTime: {
        //     epochStart: 1629242464441,
        //     epochExpiring: 1629242464441
        // }
        category: '',
        subCategory: '',
        groupBuying: {
            personCount: 5,
            unitDescription: 'Half basket'
        }
    },

    {
        name: 'Meatpie',
        slug: '/irish-pototo-10kg',

        imageUrl: '',
        limitedStock: {
            started: 20,
            remaining: 10
        },
        category: '',
        subCategory: ''
    },
    {
        name: 'Meatpie',
        slug: '/irish-pototo-10kg',

        imageUrl: '',

        category: '',
        subCategory: ''
    },
    {
        name: 'Meatpie',
        slug: '/irish-pototo-10kg',

        imageUrl: '',
        price: {
            currency: 'NGN',
            value: 350
        },
        category: '',
        subCategory: ''
    },
    {
        name: 'Clothes',
        slug: '/irish-pototo-10kg',
        price: {
            currency: 'NGN',
            value: 350
        },

        // imageUrl: '',
        limitedStock: {
            started: 20,
            remaining: 8
        },
        // limitedTime: {
        //     epochStart: 1629413432000,
        //     epochExpiring: 1629499832000
        // }
        category: '',
        subCategory: ''
    },
    {
        name: 'Clothes',
        slug: '/irish-pototo-10kg',
        price: {
            currency: 'NGN',
            value: 350
        },

        imageUrl: 'https://via.placeholder.com/600',
        limitedStock: {
            started: 20,
            remaining: 10
        },
        // limitedTime: {
        //     epochStart: 1629307368000,
        //     epochExpiring: 1629413432000
        // }
        category: '',
        subCategory: ''
    },
]

const Page = () => {
    const { WrappedComponent: EditProductSideSheet, toggleVisible: toggleEditProduct } = useSideSheet(EditProduct)
    const { WrappedComponent: AddProductSideSheet, toggleVisible: toggleAddProduct } = useSideSheet(AddProduct)
    return <Pane>
        <EditProductSideSheet />
        <AddProductSideSheet />
        <Pane height={150} background={'grey'}></Pane>
        <Pane padding={'2vw'}>
            <Pane paddingY={majorScale(2)}>
                <PaStr>Good Morning,</PaStr>
                <Su>Hero Cafe</Su>
            </Pane>
            <Pane >
                <Button size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={EyeOpenIcon}>
                    View Website
                </Button>
                <Button size='large' width='100%' iconBefore={CogIcon} marginTop={majorScale(1)}>
                    Edit Profile Settings
                </Button>
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
                {products.map((product) => {
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
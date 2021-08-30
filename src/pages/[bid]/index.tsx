import { BusinessProfileImage, Icon } from 'components'
import ProductCard, { ProductGrid } from 'components/ProductCard'
import { He, Pa, PaStr } from 'components/Text'
import { BACKGROUND, PRIMARY, WHITE } from 'config/colors'
import { majorScale, Pane, Button } from 'evergreen-ui'
import Link from 'next/link'
import productMocks from 'utils/productMocks';

import React from 'react'

interface Props {

}

const Page = () => {
    return <Pane>
        <BusinessProfileImage url='/food_background.jpg' />
        <Pane
            borderBottomLeftRadius={majorScale(1)}
            borderBottomRightRadius={majorScale(1)}
            background={WHITE} padding={majorScale(2)} boxShadow="0px 0px 10px 1px rgba(0,0,0,0.1)">
            <He>Shap Cafe</He>
            <PaStr>Lagos</PaStr>
            <Pane marginTop={majorScale(2)}>
                <Pa>
                    Who is your food plug? Who do you trust to give you the yummiest meals for your birthday's, office conferences or family get together? We got you covered Mondays to Saturday with correct owambe food.
                </Pa>
                <Pane margin='auto' width='100%' marginTop={majorScale(2)} display='grid' justifyContent='start' columnGap={majorScale(2)} gridAutoFlow='column'>
                    <Icon.Instagram size={majorScale(3)} />
                    <Icon.Twitter size={majorScale(3)} />
                    <Icon.Facebook size={majorScale(3)} />
                </Pane>
                {/* <Pane marginTop={majorScale(3)}>
                    <Link href='#'>
                        <Button size='large' appearance='primary' background={PRIMARY} width='100%'>
                            Contact Us
                        </Button>
                    </Link>
                </Pane> */}
            </Pane>
        </Pane>
        <Pane marginTop={majorScale(3)} >
            <ProductGrid>
                {productMocks.map((product) => {
                    return <ProductCard key={product.slug} product={product} />

                })}
            </ProductGrid>
        </Pane>

    </Pane>
}

export default Page
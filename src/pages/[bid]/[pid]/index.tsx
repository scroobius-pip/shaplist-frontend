import { PriceBox } from 'components'
import CartButton from 'components/CartButton'
import ProductImage from 'components/ProductImage'
import { He, Su, Pa } from 'components/Text'
import { BACKGROUND, WHITE } from 'config/colors'
import { Card, Pane, majorScale } from 'evergreen-ui'
import React from 'react'
import productMocks from 'utils/productMocks'

const Page = () => {
    return <>

        <Card className='product-grid' display='grid' gap={majorScale(2)} gridTemplateColumns='repeat(auto-fit,minmax(240px,1fr))' padding={majorScale(4)} backgroundColor={WHITE}>
            <Pane>
                <Su>Irish Potato (10kg)</Su>
                <Pane marginTop={majorScale(2)}>
                    <ProductImage
                        alt=''
                        imageUrl='/food_background.jpg'

                    />

                </Pane>
            </Pane>
            <Pane height='min-content' paddingTop={majorScale(2)} display='grid' gap={majorScale(4)}>
                <Pa>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel veritatis hic illum sed quaerat reiciendis doloribus eaque quasi recusandae deserunt ullam quibusdam nulla ab!
                </Pa>
                <PriceBox
                    groupBuying={{ unitsRemainingInGroup: 2, unitDescription: '10kg', unitPerGroup: 10 }}
                    price={{ currency: 'NGN', value: 1500 }}
                    limitedStock={{ remaining: 3, started: 30 }}
                    limitedTime={{ epochExpiring: Date.now(), epochStart: Date.now() }}
                />
                <CartButton product={productMocks[0]} />
            </Pane>
        </Card>
        <style jsx global>
            {`
          .product-grid {
              color:red;
          }
            body {
                background: ${BACKGROUND}
            }
            `}
        </style>
    </>
}

export default Page
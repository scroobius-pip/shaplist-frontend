import { Pane, majorScale } from 'evergreen-ui'
import React from 'react'

const ProductImage = ({ imageUrl, alt }: { imageUrl: string, alt: string }) => {
    return <Pane position='relative' marginBottom={majorScale(2)}  >
        <img
            style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: majorScale(1) }}
            alt={alt}
            width='100%'
            src={imageUrl}

        />
    </Pane>
}

export default ProductImage
import { Pane } from 'evergreen-ui'
import React from 'react'
import Masonry from 'react-masonry-css'

interface Props {
    children: React.ReactNodeArray
}

const Grid = ({ children }: Props) => {
    return <>

        <Masonry
            className='product-grid'
            columnClassName='product-grid_column'
            breakpointCols={{
                default: 3,
                1100: 3,
                900: 2,
                500: 1
            }}
        >
            {children}
        </Masonry>


    </>
}

export default Grid
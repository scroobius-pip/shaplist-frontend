import { BACKGROUND } from 'config/colors'
import { Pane } from 'evergreen-ui'
import AddProduct from 'features/Modals/AddProduct'
import React from 'react'

const Page = () => {
    return <Pane>
        <AddProduct
            onSubmit={() => { }}
        />
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
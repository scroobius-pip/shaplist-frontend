import { BACKGROUND } from 'config/colors'
import { Pane } from 'evergreen-ui'
import ProfileForm from 'features/ProfileForm'
import React from 'react'

const Page = () => {
    return <Pane>
        <ProfileForm
            initialValues={{
                business_image_url: '',
                business_name: 'Shaplist',
                cities: ['Abuja'],
                contact_type: 'phone',
                description: 'Shaplist description',
                extras: [],
                facebook: 'shaplit_ng',
                instagram: '',
                twitter: '',
                phone_no: '+23555555500'
            }}
            onSubmit={() => { }} />
        <style jsx global>
            {`
            body {
                background: ${BACKGROUND}
            }
            `}
        </style>
    </Pane>

}

// Page.showNav = false
Page.showFooter = false

export default Page
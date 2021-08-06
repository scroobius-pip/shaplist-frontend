import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import illustration from '../public/storefront_illustration.jpg'
import { Button, Pane, majorScale, Heading, Paragraph, ArrowRightIcon, UnorderedList, ListItem, TickIcon } from 'evergreen-ui'
import React from 'react'
import { Logo, Text, ComingSoonForm } from 'components'





export default function Home() {
  return (
    <>
      <Pane className={styles.container}>
        <Pane marginBottom={majorScale(4)}><Logo /></Pane>
        <Pane className={styles.top}>
          <Pane>
            <Heading size={900} >
              <strong>Create a Website For Your Food Business</strong>
            </Heading>
            <Pane paddingTop={majorScale(2)} marginBottom={majorScale(2)}>

              <Text.Su >
                Create an effective catalog page for your food business in 10 minutes without any technical skills.
              </Text.Su>
            </Pane>

            <Pane padding={majorScale(2)} marginTop={majorScale(2)}>
              <Heading textAlign={'left'}><strong>Shaplist allows you to:</strong></Heading>
              <UnorderedList size={500} textAlign={'left'} icon={TickIcon} iconColor='success'>
                <ListItem>Increase sales</ListItem>
                <ListItem>Display your catalog in a beautiful way</ListItem>
                <ListItem>Tell customers about your business</ListItem>
                <ListItem>Take orders from your customers</ListItem>
                <ListItem>Get customers in touch with you with a few taps</ListItem>
                <ListItem><strong>Do all the above for free!</strong></ListItem>
              </UnorderedList>
            </Pane>
            <Pane className={'form-desktop'}>
              <ComingSoonForm />
            </Pane>
          </Pane>
          <Image alt='shaplist storefront' src={illustration} layout='responsive'></Image>
          <Pane className={'form-mobile'}>
            <ComingSoonForm />
          </Pane>
        </Pane>
      </Pane>
      <style jsx global>
        {`
@media (max-width: 768px) {
.form-mobile {
  display:block;
}

.form-desktop {
  display:none;
}
}

@media (min-width: 769px){
  .form-mobile {
    display:none;
  }
  
  .form-desktop {
    display:block;
  }
}
   `}
      </style>

    </>
  )
}

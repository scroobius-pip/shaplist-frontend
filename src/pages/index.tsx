import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import illustration from '../public/storefront_illustration.jpg'
import logo from '../public/storefront_shaplist_logo.svg'
import { Button, Pane, Text, majorScale, Heading, ArrowRightIcon, UnorderedList, ListItem, TickIcon } from 'evergreen-ui'
import React from 'react'
import ComingSoonForm from '../components/ComingSoonForm'

export default function Home() {
  return (
    <>
      <Pane className={styles.container}>
        <Pane><Image src={logo} /></Pane>
        <Pane className={styles.top}>
          <Pane>
            <Heading size={900} marginBottom={majorScale(2)}>
              <strong>Create a Web Page For Your Food Business</strong>
            </Heading>
            <Heading size={700} marginBottom={majorScale(4)}>
              Create an effective catalog page for your food business in 20 minutes without technical skills.
            </Heading>
            <ComingSoonForm />
            <Pane padding={majorScale(2)}>
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
          </Pane>
          <Image src={illustration} layout='responsive'></Image>
        </Pane>
      </Pane>
      {/* <style jsx global>
        {`
    body {
      background-color: #FFDDC7;
    }
   `}
      </style> */}

    </>
  )
}

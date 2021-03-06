import React, { memo } from 'react'

import { CardText, A } from '@bootstrap-styled/v4'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

const Contact = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Contact</MyCardTitle>
        <CardText>
          16.09.1986
          <br />
          Swiss
          <br />
          <br />
          <A href="tel:0041797562627">+41 79 756 26 27</A>
          <br />
          <A href="mailto:hireme@philiplehmann.ch">hireme@philiplehmann.ch</A>
          <br />
          <A
            href="https://philiplehmann.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            philiplehmann.ch
          </A>
          <br />
          <br />
          Richterwis 12
          <br />
          8303 Bassersdorf
        </CardText>
      </MyCardBlock>
    </MyCard>
  )
})
Contact.displayName = 'Contact'

export default Contact

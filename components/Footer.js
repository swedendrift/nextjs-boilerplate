import Link from 'next/link'
import React from 'react'

const footerStyle = {
  marginBottom: 30,
  display: 'flex',
  justifyContent: 'center'
}

const Footer = () => (
    <div>
        <p href="/">
          <a style={footerStyle}>Home</a>
        </p>
    </div>
)

export default Footer
import Link from 'next/link'
import React from 'react'

const footerStyle = {
  marginBottom: 10,
  display: 'flex',
  justifyContent: 'center'
}

const Footer = () => (
    <div>
        <p style={footerStyle}>&#169; 2018 Erick Lee</p>
    </div>
)

export default Footer
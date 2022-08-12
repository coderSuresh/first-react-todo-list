import React from 'react'

export const Footer = () => { //named export would be default if default keyword is used
  let footerStyle = {
    minHeight: "70px",
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className='text-center py-3'>Copyright &copy; Todo List Inc.</p>
    </footer>
  )
}

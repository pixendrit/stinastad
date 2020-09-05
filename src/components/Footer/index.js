import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Built with ❤️ by <a href='https://www.pixendrit.com'>pixendrit</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

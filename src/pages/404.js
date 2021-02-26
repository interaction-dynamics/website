import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'

import style from './404.style'

// // styles
// const pageStyles = {
//   color: '#232129',
//   padding: '96px',
//   fontFamily: '-apple-system, Roboto, sans-serif, serif',
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: '#8A6534',
//   padding: 4,
//   backgroundColor: '#FFF4DB',
//   fontSize: '1.25rem',
//   borderRadius: 4,
// }

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO />
      <div className={style.center}>
        <div className={style.content}>
          <h1 className={style.title}>Page not found</h1>
          <p className={style.paragraph}>
            Sorry{' '}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{' '}
            we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === 'development' ? (
              <>
                <br />
                Try creating a page in{' '}
                <code className={style.code}>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <Link className={style.button} to="/">
              Go back to the known world
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

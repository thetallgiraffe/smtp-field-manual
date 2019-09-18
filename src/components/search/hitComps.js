import React from 'react'
import { Highlight } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

export const CodeHit = clickHandler => ({ hit }) => {
  const { slug } = hit

  return (
    <Link to={`/code${slug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute='reply' hit={hit} tagName='mark' />
      </h4>
    </Link>
  )
}

export const ResponseHit = clickHandler => ({ hit }) => {
  const { codeSlug } = hit

  return (
    <Link to={`/code${codeSlug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute='response' hit={hit} tagName='mark' />
      </h4>
    </Link>
  )
}

export const ProviderHit = clickHandler => ({ hit }) => {
  const { slug } = hit

  return (
    <Link to={`/provider${slug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute='name' hit={hit} tagName='mark' />
      </h4>
    </Link>
  )
}

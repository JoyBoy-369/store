import React from 'react'
import CollectionItem from '../collection-item';

import './styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {
        /*TODO : handle perf for large arrays*/
        items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
    </div>
  </div>
)

export default CollectionPreview

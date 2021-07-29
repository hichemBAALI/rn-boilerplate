import React from 'react'
import { createImageProgress } from 'react-native-image-progress'
import FastImage from 'react-native-fast-image'
import colors from '../../config/colors'

const Image = createImageProgress(FastImage)
const CachedImage = (props) => {
  const { style, source, resizeMode, indicator, indicatorProps } =
    props
  return (
    <Image
      source={{
        ...source,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={resizeMode}
      style={style}
      indicator={indicator}
      indicatorProps={{
        ...indicatorProps,
        size: 50,
        color: colors.blue_300,
        unfilledColor: colors.white,
      }}
    />
  )
}

export default CachedImage

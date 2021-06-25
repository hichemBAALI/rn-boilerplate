import React, {Component} from 'react';
import {createImageProgress} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import colors from '../../config/colors';

const Image = createImageProgress(FastImage);
class CachedImage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Image
        source={{
          ...this.props.source,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={this.props.resizeMode}
        style={this.props.style}
        indicator={this.props.indicator}
        indicatorProps={{
          ...this.props.indicatorProps,
          size: 50,
          color: colors.blue_300,
          unfilledColor: colors.white,
        }}
      />
    );
  }
}

export default CachedImage;

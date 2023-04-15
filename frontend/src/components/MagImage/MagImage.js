import React from 'react';
import styled from 'styled-components';
import ReactImageMagnify from 'react-image-magnify';

const StyledDiv = styled.div`
  height: 647px;
  @media all and (max-width: 1200px) {
    height: 560px;
  }
  @media all and (max-width: 1100px) {
    height: 510px;
  }
  @media all and (max-width: 1000px) {
    height: 460px;
  }
  .zw {
    z-index: 999;
    background-color: #fff;
  }
  .magnify {
    height: 100% !important;
    > img {
      max-height: 100% !important;
      object-fit: contain;
    }
  }
`;

export default ({ image }) => {
    const [width, setWidth] = React.useState(0);

    return (
        <StyledDiv
            ref={(node) => {
                if (node) setWidth(node.offsetWidth);
            }}
            style={width > 0 ? { height: "100%", border: '1px solid rgba(79, 63, 104, 0.3)' } : {}}
        >
            {image && (
                <ReactImageMagnify
                    key={image}
                    className="magnify"
                    {...{
                        smallImage: { alt: '', isFluidWidth: true, src: image, placeholder: image },
                        lensStyle: { background: 'hsla(0, 0%, 100%, .3)', border: '1px solid #ccc' },
                        shouldUsePositiveSpaceLens: true,
                        largeImage: { src: image, width: 1500, height: 1500 },
                        enlargedImagePosition: 'beside',
                        enlargedImageContainerDimensions: { width: '100%', height: '100%' },
                        enlargedImageContainerClassName: 'zw',
                    }}
                />
            )}
        </StyledDiv>
    );
};

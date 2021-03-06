import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path, G, Text, TSpan } from 'react-native-svg'
const BasketFullIcon = ({ color = '#000', size = 40, qy }) => {
  return (
    <Svg
      viewBox="0 0 40 40"
      preserveAspectRatio="xMidYMin"
      width={size}
      height={size}
    >
      <G x={-8} y={-8}>
        <Path
          fill={color}
          d="M39.2,20.931H36.35V20.2a4.194,4.194,0,0,0-3.39-4.111V8.274a.8.8,0,0,0-.8-.8H28.251a.8.8,0,0,0-.8.8v7.82a4.194,4.194,0,0,0-3.39,4.111v.726h-.815V4.989a.8.8,0,0,0-.8-.8h-4.9a.8.8,0,0,0-.8.8V20.931h-.575V17.4a.8.8,0,0,0-.8-.8H4.542a.8.8,0,0,0-.8.8v3.529H.8a.8.8,0,0,0-.8.8v4.89a.8.8,0,0,0,.8.8h.717v5.87A10.264,10.264,0,0,0,11.766,43.537H28.234A10.264,10.264,0,0,0,38.486,33.285v-5.87H39.2a.8.8,0,0,0,.8-.8v-4.89A.8.8,0,0,0,39.2,20.931ZM29.048,9.071h2.318v2.383H29.048ZM25.657,20.2a2.6,2.6,0,0,1,2.593-2.593.8.8,0,0,0,.8-.8V13.048h2.318v3.767a.8.8,0,0,0,.8.8A2.6,2.6,0,0,1,34.756,20.2v.726h-9.1ZM18.344,5.786h3.311V25.821H18.344ZM5.339,18.2h9.243v2.733H5.339ZM1.594,22.525H16.751v3.3H1.594Zm35.3,10.76a8.669,8.669,0,0,1-8.659,8.659H11.766a8.669,8.669,0,0,1-8.659-8.659v-5.87H36.892v5.87Zm1.514-7.464H23.249v-3.3H38.406v3.3Z"
          transform="translate(8 3.808)"
        />

        <Text fill={color} fontSize="14" fontFamily="Avenir" fontWeight="700">
          <TSpan x="24" y="43">
            {qy}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

BasketFullIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  qy: PropTypes.number
}

export default BasketFullIcon

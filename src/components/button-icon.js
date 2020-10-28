import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from 'theme-ui'

const ButtonIcon = forwardRef(
  ({ icon, iconPosition = 'left', sx, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        {...rest}
        sx={{
          columnGap: 3,
          ...(iconPosition === 'right' && { flexDirection: 'row-reverse' }),
          ...sx
        }}
      >
        <Box as={icon} sx={{ m: -1, width: 5, height: 5, flex: 'none' }} />
        <Box as="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {rest.children}
        </Box>
      </Button>
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'

ButtonIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  sx: PropTypes.object
}

export default ButtonIcon

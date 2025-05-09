import { memo } from 'react'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Path } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M16 3h3v18h-3" stroke={color} />
      <Path d="M8 21H5V3h3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Brackets'

export const Brackets: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))

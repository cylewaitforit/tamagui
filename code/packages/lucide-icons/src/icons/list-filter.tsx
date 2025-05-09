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
      <Path d="M3 6h18" stroke={color} />
      <Path d="M7 12h10" stroke={color} />
      <Path d="M10 18h4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'ListFilter'

export const ListFilter: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))

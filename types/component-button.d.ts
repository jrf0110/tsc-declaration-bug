declare module '@cloudflare/component-button' {
  import * as React from 'react'
  interface IButtonProps {
    onClick?: (e: MouseEvent) => void
    submit?: boolean
    spaced?: boolean
    group?: 'first' | 'inbetween' | 'last'
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    disabled?: boolean
    loading?: boolean
    inverted?: boolean
    tabIndex?: number
    iconLabel?: string
    iconType?: string
    className?: string
  }

  interface IButtonGroupProps {
    direction?: 'column' | 'row'
    spaced: boolean
  }

  class Button extends React.Component<IButtonProps, Object> {}
  class ButtonUnstyled extends React.Component<IButtonProps, Object> {}
  class ButtonTheme extends React.Component<Object, Object> {}
  class ButtonGroup extends React.Component<IButtonGroupProps, Object> {}
}

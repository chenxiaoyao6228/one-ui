import React, { Context, createContext } from 'react'

const defaultPrefixCls = 'one'

const ConfigContext: Context<ConfigConsumerProps | null> = createContext({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls
    return `${defaultPrefixCls}-${suffixCls}`
  }
})
export const ConfigConsumer = ConfigContext.Consumer

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string
}

export interface ConfigProviderProps {
  prefixCls?: string
}

class ConfigProvider extends React.Component<ConfigProviderProps, any> {
  getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    const {
      prefixCls = defaultPrefixCls
    } = this.props
    if (customizePrefixCls) return customizePrefixCls
    return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls
  }
  renderProvider = (context: ConfigConsumerProps) => {
    const { children } = this.props
    const config: ConfigConsumerProps = {
      ...context,
      getPrefixCls: this.getPrefixCls
    }
    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  }
  render() {
    return <ConfigConsumer>{this.renderProvider}</ConfigConsumer>
  }
}

export default ConfigProvider

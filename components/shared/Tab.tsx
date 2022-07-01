import React from 'react'
import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from 'antd'
import styled from 'styled-components'

const { TabPane } = AntdTabs

const StyledTabPane = styled(TabPane)``

const StyledTabs = styled(AntdTabs)`
  .ant-tabs-ink-bar {
    height: 4px;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn > * {
    color: ${({ theme }) => theme.primaryColor.main};
  }
`

export { StyledTabPane as TabPane, StyledTabs as Tabs }

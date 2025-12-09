"use client"
import { Tab, Tabs } from '@heroui/tabs'
import * as React from 'react'
import ParentChild from './parent-children'
import ColorApp from './color'
import CounterApp from './counter-logger'
import SyncApp from './sync'
import ContextApp from './context'
import StateApp from './state'
import ReducerApp from './reducer'

export default function Page() {
  return (
    <Tabs aria-label="Static tabs">
      <Tab title="Counter Logger">
        <CounterApp />
      </Tab>
      <Tab title="Parent Children">
        <ParentChild />
      </Tab>
      <Tab title="DefaultApp">
        <ColorApp />
      </Tab>
      <Tab title="UseSync">
        <SyncApp />
      </Tab>
      <Tab title="ContextApp">
        <ContextApp />
      </Tab>
      <Tab title="StateApp">
        <StateApp />
      </Tab>
      <Tab title="ReducerApp">
        <ReducerApp />
      </Tab>
    </Tabs>
  )
}
"use client"
import { Tab, Tabs } from '@heroui/tabs'
import * as React from 'react'
import ParentChild from './parent-children'
import ColorApp from './color'
import CounterApp from './counter-logger'

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
    </Tabs>
  )
}
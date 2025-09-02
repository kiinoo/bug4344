"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Tab, Tabs } from "@heroui/tabs";
import { Key } from '@react-types/shared';

export const TabTest = () => {
  const [solarTime, setSolarTime] = useState<string>("something");
  const [mySelectedTab, setMySelectedTab] = useState<Key>("1")

  return (
    <div>
      <Button onPress={(e) => { setSolarTime(solarTime ? "" : "yes") }}>ClickME</Button>
      <div>
        <Tabs aria-label="Dynamic tabs" destroyInactiveTabPanel={false} defaultSelectedKey={mySelectedTab} onSelectionChange={setMySelectedTab} >
          <Tab key="1" title="111">
            <div>111</div>
          </Tab>
          <Tab key="2" title="222">
            <div>222</div>
          </Tab>
          <Tab key="3" title="333">
            <div>333</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

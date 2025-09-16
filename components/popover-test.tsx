"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Tab, Tabs } from "@heroui/tabs";
import { Key } from '@react-types/shared';
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Input } from "@heroui/input";


const MyEndContent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Popover placement="right" isNonModal={false} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <Button variant="light" onPress={() => setIsOpen(!isOpen)}>
            Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Tabs aria-label="Dynamic tabs">
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const PopoverTest = () => {
  return (
    <div>
      <Input type="text" name='myinput' label="input something here and click popover" title='input something here and click popover' endContent={<MyEndContent />} />
    </div>
  );
};

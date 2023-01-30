import { ConfigProvider, theme } from "antd";
import React from "react";

export function AntdStartupProvider({ children }) {

  return (
    <ConfigProvider>
      {children}
    </ConfigProvider>
  );
}

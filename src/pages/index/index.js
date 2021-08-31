import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";

import Cp from "../../components/cp/index.js";
import "./index.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页",
  };

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Cp params="sss"></Cp>
      </View>
    );
  }
}

export default Index;

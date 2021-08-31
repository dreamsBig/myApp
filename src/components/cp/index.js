import Taro, { Component } from "@tarojs/taro";
// import Nerv from 'nervjs'
import { View, Text, Button } from "@tarojs/components";
class Cp extends Component {
    constructor(props){
       console.log(props, props);
    }
    static defaultProps = {
        params:""
    }
    state = {};
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(nextProps, nextContext) {}
    componentWillUnmount() {}
    componentDidShow() {}
    componentDidHide() {}
    componentDidCatchError() {}
    componentDidNotFound() {}
    render() {
        console.log(this.props)
        return <View>组件 {} </View>
    }
}

export default Cp
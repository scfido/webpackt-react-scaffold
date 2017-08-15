import React from 'react';
import PropTypes from 'prop-types'
import style from "./style/index.less"

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        //在这里设置初始状态
        this.state = {
        }
    }

    componentDitMount(){

    }

    componentWillUnmount(){

    }

    render() {
        return (
            <div >
                <button className={style.button}>示例按钮</button>
            </div>
        )
    }
}

//限定控件传入的属性类型
//name.propTypes = {
//    index: PropTypes.number,
//}

//设置默认属性
//name.defaultProps = {
//  index: 1
//};
import React, { Component, useState } from 'react'
import { Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';


export class MyLoginFunction extends Component {
    render() {
        return (
            <>
                <Modal
                    title="Login Modal"
                    visible={this.props.showBool} width={250}
                    onCancel={this.props.onCancelFun}
                    onOk={this.props.handleOkFun}>
                    <Input placeholder="Benutzername"></Input>
                    <Input placeholder={this.props.password}></Input>
                </Modal>
            </>
        )
    }
}

export default MyLoginFunction
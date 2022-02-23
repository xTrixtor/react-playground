import React from 'react'
import 'antd/dist/antd.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal, Button } from 'antd';
import MyLoginFunction from './components/MyLoginFunction';

export default function LoginModal(showModalBool=false) {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleOk = () => {
        setIsModalVisible(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal title="Login Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={200}>
                <MyLoginFunction loginName="Benutzername" password="Passwort" />
            </Modal>
        </>
    )
}

import React from 'react'
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Card, Col, Image } from 'antd';

export default function EmployeeCard({ userInfo }) {

    const { Meta } = Card;
    const [visible, setVisible] = useState(false);

    const getFullUserName = (userModel) => {
        const { name } = userModel;
        const { first, last } = name;
        return `Name: ${first} - ${last}`;
    }

    const getImageOfEmployee = (userModel) => {
        const { picture } = userModel;
        const { large } = picture
        return large
    }

    return (
        <Col span={12} style={{ margin: 5 }}>
            <Card
                hoverable
                style={{ width: 250 }}
                size='medium'
                cover=
                {
                    <Image
                        preview={{ visible: false }}
                        width={250}
                        src={getImageOfEmployee(userInfo)}
                        onClick={() => setVisible(true)}
                    />
                }
            >
                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                        <Image src={getImageOfEmployee(userInfo)}/>
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>
                <Meta title={getFullUserName(userInfo)} />
            </Card>
        </Col >
    )
}

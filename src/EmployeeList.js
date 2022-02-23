import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import { Row, Col, Divider, Button } from 'antd';
import { Badge, Avatar, Slider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
export default function EmployeeList() {

    const [count, setCount] = useState(0);
    const [userInfos, setUserInfos] = useState([]);

    useEffect(async () => {
        const result = await getJsonData();
        setUserInfos(result);
    }, [])

    const getNextEmployee = async () => {
        setCount(count + 1);
        await axios
            .get(`https://randomuser.me/api/?page=${count}`)
            .then(({ data }) => {
                setUserInfos(data.results)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const getJsonData = async () => {
        return await axios
            .get(`https://randomuser.me/api/`)
            .then(({ data }) => {
                return data.results
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <Row align='center' style={{ margin: 5 }}>
                <Col>
                    {userInfos.map((userInfo, key) => {
                        return <Badge count={count}>
                                    <EmployeeCard key={key} userInfo={userInfo}></EmployeeCard>
                                </Badge>
                    })}
                    <Row align='center'>
                        <Button type='primary' align="middl" onClick={() => getNextEmployee()} style={{ margin: '50' }}>Next Employee</Button>
                    </Row>
                    <Slider defaultValue={0} max={20} onChange={() => { getNextEmployee() }}></Slider>
                </Col>
            </Row>
        </>
    )
}

import React from "react";
import { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, WarningOutlined, TeamOutlined, ThunderboltOutlined, LoginOutlined } from '@ant-design/icons';
import MyLoginFunction from "./components/MyLoginFunction";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const LOCAL_STORAGE_KEY = "todoApp.todos"


function App() {
  const [todos, setTodos] = useState([])
  const [textValue, setTextValue] = useState("")
  const [showModal, setModalBool] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  const handleNewTodo = () => {
    if (textValue === '' || textValue == null) {
      alert("Todo needs a name!")
    }
    else {
      let newTodo = { id: todos.length + 1, name: textValue, complete: false }
      setTodos(prevList => {
        return [...prevList, newTodo];
      })
      setTextValue("");
    }
  }
  
  function removeTodo(id) {
    const newTodos = [...todos]
    setTodos(newTodos.filter(todo => todo.id !== id))
  }

  function handleClearButton() {
    const notCompletedTodos = todos.filter(todo => todo.complete === false)
    setTodos(notCompletedTodos);
  }

  const handleOk = () => {
    setModalBool(false);
  };

  const handleCancel = () => {
    setModalBool(false);
  };

  return (
    <>
      <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<WarningOutlined />}>Warnings</Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>Meetings</Menu.Item>
            <Menu.Item key="3" icon={<ThunderboltOutlined />}>News</Menu.Item>
            <Menu.Item key="4" icon={<LoginOutlined />} onClick={()=>{setModalBool(true)}} id="Login">Login</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <MyLoginFunction showBool={showModal} onCancelFun={handleCancel} handleOkFun={handleOk}/>
              <EmployeeList></EmployeeList>
            </Content>
          </Layout>
        </Content>
      </Layout>

      <label id="ha">Hallo</label>

      {/* <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={RemoveTodo} />
      <input type="text" value={textValue} onChange={(newValue) => { setTextValue(newValue.target.value) }} />
      <button onClick={handleNewTodo}>Add Todo</button>
      <button onClick={handleClearButton}>Clear</button>
      <div>{todos.filter(todos => !todos.complete).length} left to do</div> */}
    </>
  );


}

export default App;

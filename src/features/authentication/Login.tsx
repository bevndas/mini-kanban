import React from 'react';
import {Typography, Input, Button, Form} from "antd";
import {Link as RLink} from 'react-router-dom';
import Link from "antd/es/typography/Link";
import {Content} from "antd/es/layout/layout";
import {ILogin, useLogin} from "../../hooks/auth/useLogin";


const Login: React.FC = (props) => {
    let {Title, Text} = Typography;
    const {status, mutate} = useLogin();

    const onLogin = (values: ILogin) => {
        mutate(values);
    }

  return (
    <Content className="flex justify-center items-center p-1 flex-col max-w-xs m-auto h-full">
        <Title level={3}>Log in</Title>
        <Form
            name='login'
            layout='vertical'
            onFinish={onLogin}
            className='w-full max-w-xs'
            autoComplete='off'
        >

            <Form.Item name={'username'} rules={[{required: true}]}>
                <Input placeholder="Username" size={'large'} />
            </Form.Item>
            <Form.Item name={'password'} rules={[{required: true},
                {
                    validator: (_, value) => {
                        if (value.length < 8) {
                            return Promise.reject("Error");
                        }
                    return Promise.resolve()
                },
                    message: "Password must be greater than 8"
                }]}>
                <Input.Password placeholder="Password" size={'large'} />
                {/*<div className='text-right mt-2'>
                    <Link><RLink to={'/forgot-password'}>Forgot Password?</RLink></Link>
                </div>*/}
            </Form.Item>

            <Button type="primary" size="large" block htmlType={"submit"} loading={status === 'loading'}>Log in</Button>
        </Form>

            <div className="mt-4 text-left w-full">
                <Text>Dont have an account?</Text><Link><RLink to={'/signup'}> Sign up </RLink></Link>
            </div>



    </Content>
  );
};

export default Login;
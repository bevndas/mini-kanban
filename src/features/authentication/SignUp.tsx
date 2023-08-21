import React from 'react';
import {Button, Form, Input, Typography} from "antd";
import Link from "antd/es/typography/Link";
import {Link as RLink} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import {IRegister, useRegister} from "../../hooks/auth/useRegister";


const SignUp: React.FC = (props) => {
    let {Title, Text} = Typography;
    const {status, mutate } = useRegister();

    const onSignUp = (values: IRegister) => {
        mutate(values);
    }

    return (
        <Content className="flex justify-center items-center p-1 flex-col max-w-xs m-auto h-full">
            <Title level={3}>Create your account</Title>
            <Form
                name='signup'
                layout='vertical'
                onFinish={onSignUp}
                className='w-full max-w-xs'
                autoComplete='off'
            >
                <Form.Item name={'email'} rules={[{
                    required: true,
                    type: "email",
                    message: "This is not a valid email"
                }]}>
                    <Input size={'large'} placeholder="Email" />
                </Form.Item>
                <Form.Item name={'username'} rules={[{required: true}]}>
                    <Input placeholder="Username" size={'large'} />
                </Form.Item>
                <Form.Item name={'password'} rules={[{required: true}]}>
                    <Input.Password placeholder="Password" size={'large'} />
                </Form.Item>

                <Button type="primary" size="large" block htmlType={"submit"} loading={status === 'loading'}> Create Account</Button>
            </Form>

            <div className="mt-4 text-left w-full">
                <Text>Already have an account?</Text><Link><RLink to={'/login'}> Log in </RLink></Link>
            </div>

        </Content>
    )
};

export default SignUp;
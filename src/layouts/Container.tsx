import {PropsWithChildren} from "react";
import {Layout} from "antd";

const Container = (props: PropsWithChildren) => {
    return (
        <Layout className='h-full w-full p-4'>
            {props.children}
        </Layout>
    )
}
export default Container;
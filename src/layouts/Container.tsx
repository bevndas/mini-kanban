import {PropsWithChildren} from "react";

const Container = (props: PropsWithChildren) => {
    return (
        <div className='h-full w-full p-4'>
            {props.children}
        </div>
    )
}
export default Container;
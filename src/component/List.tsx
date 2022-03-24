import React, { FC } from "react";

interface ListPorps<T>{
    item: T[]
    renderItem: (item: T) => React.ReactNode
}

export const List: React.FC<T> = (props: ListPorps<T> ) => {
    return (
        <div>
            {props.item.map(props.renderItem)}
        </div>
    )
};
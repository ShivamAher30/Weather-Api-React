import React from "react";
export function Button(props)
{
    return (
        <>
        <button type={props.type}>{props.item}</button>
        </>
    )

}
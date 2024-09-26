"use client"
import { Link } from 'next-view-transitions'
import { memo } from "react";

interface LinkTransitionProps {
    href: string;
    children: React.ReactNode;
    [key: string]: any;
}

function LinkTransition(props: LinkTransitionProps) {

    return (
        <Link {...props}>
            {props.children}
        </Link>
    );
}
export default memo(LinkTransition);
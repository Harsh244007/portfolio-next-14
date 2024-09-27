import { memo } from "react"

const stag_delay = 0.02
const ZoopText: React.FC<{ str: string, from?: string, position?: string, className?: string, focus: boolean }> = ({ str, from, focus, position = "", className = "", }) => {
    const focusClass = focus === true ? "  " : ""
    const classNameRoot = from === "second" ? "   absolute inset-0 " : "  "
    const childClassName = from === "second" ? " top-[23px] opacity-0 group-hover/headerZoop:top-[0px] group-active/headerZoop:top-[0px] group-focus/headerZoop:top-[0px] group-hover/headerZoop:opacity-100 group-active/headerZoop:opacity-100 group-focus/headerZoop:opacity-100  " : "  top-[0px] opacity-100 group-hover/headerZoop:top-[-23px] group-active/headerZoop:top-[-23px] group-focus/headerZoop:top-[-23px] group-hover/headerZoop:opacity-0 group-active/headerZoop:opacity-0 group-focus/headerZoop:opacity-0  "
    return <div className={classNameRoot + " " + focusClass + " " + className}>
        {str.split("").map((item, ix) => {
            if (item === " ") return item
            return <span style={{ transitionDelay: (stag_delay * (ix + 1)) + "s" }} aria-hidden={from === "second"} className={`${childClassName}  relative  inline-block ${className}`} key={item + ix}>{item}</span>
        })}
    </div>
}
const ZoopTextMemo = memo(ZoopText)
const StaggeredText: React.FC<{ str: string, focus?: boolean, className?: string, hoverGroup?: boolean }> = ({ str, className = "", hoverGroup = true, focus = false }) => {
    const focusClass = focus === true ? " z-10 px-2  focus:ring-2 focus:ring-blue-500 focus:font-semibold " : ""
    const hoverGroupClass = hoverGroup === false ? ' group/headerZoop ' : ""

    return <div
        tabIndex={focus === true ? 0 : -1} className={"overflow-hidden relative inline-block w-max whitespace-nowrap h-6  " + hoverGroupClass + focusClass}>
        <ZoopTextMemo focus={focus} className={className} from="first" str={str}></ZoopTextMemo>
        <ZoopTextMemo focus={focus} className={className} from="second" str={str}></ZoopTextMemo></div>
}

export default memo(StaggeredText)
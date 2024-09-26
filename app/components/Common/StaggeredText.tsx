import { memo } from "react"

const ZoopText: React.FC<{ str: string, from?: string, position?: string, className?: string, focus: boolean }> = ({ str, from, focus, position = "", className = "", }) => {
    const focusClass = focus === true ? "  " : ""
    const classNameRoot = from === "second" ? "   absolute inset-0 " : "  "
    const childClassName = from === "second" ? " top-[23px] opacity-0 group-hover/headerZoop:top-[0px] group-active/headerZoop:top-[0px] group-focus/headerZoop:top-[0px] group-hover/headerZoop:opacity-100 group-active/headerZoop:opacity-100 group-focus/headerZoop:opacity-100  " : "  top-[0px] opacity-100 group-hover/headerZoop:top-[-23px] group-active/headerZoop:top-[-23px] group-focus/headerZoop:top-[-23px] group-hover/headerZoop:opacity-0 group-active/headerZoop:opacity-0 group-focus/headerZoop:opacity-0  "
    return <div className={classNameRoot + " " + focusClass + " " + className}>
        {str.split("").map((item, ix) => {

            const firstToLast = [
                "delay-0ms",    "delay-100ms",  "delay-200ms",
                "delay-300ms",  "delay-400ms",  "delay-500ms",
                "delay-600ms",  "delay-700ms",  "delay-800ms",
                "delay-900ms",  "delay-1000ms", "delay-1100ms",
                "delay-1200ms", "delay-1300ms", "delay-1400ms",
                "delay-1500ms", "delay-1600ms", "delay-1700ms",
                "delay-1800ms", "delay-1900ms", "delay-2000ms",
                "delay-2100ms", "delay-2200ms", "delay-2300ms",
                "delay-2400ms", "delay-2500ms", "delay-2600ms",
                "delay-2700ms", "delay-2800ms", "delay-2900ms",
                "delay-3000ms", "delay-3100ms", "delay-3200ms",
                "delay-3300ms", "delay-3400ms", "delay-3500ms",
                "delay-3600ms", "delay-3700ms", "delay-3800ms",
                "delay-3900ms", "delay-4000ms", "delay-4100ms",
                "delay-4200ms", "delay-4300ms", "delay-4400ms",
                "delay-4500ms", "delay-4600ms", "delay-4700ms",
                "delay-4800ms", "delay-4900ms", "delay-5000ms",
                "delay-5100ms", "delay-5200ms", "delay-5300ms",
                "delay-5400ms", "delay-5500ms", "delay-5600ms",
                "delay-5700ms", "delay-5800ms", "delay-5900ms",
                "delay-6000ms"
              ];


            const animationTimeLine = firstToLast[ix] + " "
            if (item === " ") return item
            return <span aria-hidden={from==="second"} className={`${childClassName} ${animationTimeLine}  relative  inline-block ${className}`} key={item + ix}>{item}</span>
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
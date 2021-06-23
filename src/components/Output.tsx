import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../core/AppContext";

export const Output = () => {
    const appContext = useContext(AppContext);
    const textAreaEl = useRef<HTMLTextAreaElement>(null);

    const moveTop = () => {
        textAreaEl.current!.scrollTop = textAreaEl.current?.scrollHeight!;
    }

    useEffect(() => {
        moveTop();
    })


    return (
        <div className="w-3/6 h-3/6 p-4">
            <p>Log Count : {appContext.store?.logCount}</p>
            <textarea ref={textAreaEl} className="w-full h-full border" placeholder="Realtime JSON Print" defaultValue={appContext.store?.json}>

            </textarea>
        </div>
    );
}
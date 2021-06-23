
import { FC } from "react";

interface DraggableProps {
    onDrag(event: React.DragEvent<HTMLElement>): any;
    onDragStart(event: React.DragEvent<HTMLElement>): any;
    onDragEnd(event: React.DragEvent<HTMLElement>): any;
    onDragOver(event: React.DragEvent<HTMLElement>): any;
    onDragLeave(event: React.DragEvent<HTMLElement>): any;
    onDrop(event: React.DragEvent<HTMLElement>): any;
    index: number;
    className: string;
}
export const Draggable: FC<DraggableProps> = (props) => {
    return (
        <li className={props.className + " p-4 text-center border w-full hover:bg-gray-200"}
            draggable onDrag={props.onDrag}
            onDragEnd={props.onDragEnd}
            onDragLeave={props.onDragLeave}
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
            onDragStart={props.onDragStart}
            data-position={props.index}>

            {props.children}
        </li>
    );
}
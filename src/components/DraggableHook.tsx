import { useContext, useState } from "react";
import data from '../config/data.json';
import { AppContext } from "../core/AppContext";

export interface DnDState {
    draggedFrom?: any,
    draggedTo?: any,
    isDragging?: boolean,
    originalOrder?: any,
    updatedOrder?: any
}

// const items = [
//     { number: "1", title: "Ali Hadi Öztürk" },
//     { number: "2", title: "Programmer" },
//     { number: "3", title: "Everthing can be done" },
//     { number: "4", title: "VS Code" },
//     { number: "5", title: "Work hard" },
// ]
export const useDraggable = (props?: any) => {
    const [dragNDrop, setDragNDrop] = useState<DnDState>();
    const [itemList, setItemList] = useState(data.items);
    const appContext = useContext(AppContext);


    const print = (value: string) => {
        appContext.actions.printJson(value)
    }

    const dragStart = (e: React.DragEvent<HTMLElement>) => {
        //e.preventDefault();

        const initialPosition = Number(e.currentTarget.dataset.position);
        appContext.actions.printJson("Dragging item : " + e.currentTarget.textContent)
        setDragNDrop({
            ...dragNDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: itemList
        })


        //i'm using firefox, this made me lose too much time ^_^
        e.dataTransfer.setData("text/html", '');
    }

    const dragOver = (e: React.DragEvent<HTMLElement>) => {

        e.preventDefault();
        let newList = dragNDrop?.originalOrder;
        const draggedFrom = dragNDrop?.draggedFrom;

        const draggedTo = Number(e.currentTarget.dataset.position);
        if (draggedFrom === draggedTo)
            return;

        print("DragOver to item  : " + e.currentTarget.textContent)
        const itemDragged = newList[draggedFrom];
        // debugger;
        const remainingItems = newList.filter((item: any, index: number) => index !== draggedFrom);

        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];

        if (draggedTo !== dragNDrop?.draggedTo) {
            setDragNDrop({
                ...dragNDrop,
                updatedOrder: newList,
                draggedTo: draggedTo
            })
        }
    }

    const onDrop = (event: React.DragEvent<HTMLElement>) => {

        event.preventDefault();
        setItemList(dragNDrop?.updatedOrder);
        print("Dropped to item  : " + event.currentTarget.textContent)
        setDragNDrop({
            ...dragNDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }

    const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
        print("Drag leaved")
        setDragNDrop({
            ...dragNDrop,
            draggedTo: null
        });

    }

    return { onDrop, onDragLeave, dragOver, dragStart, itemList, dragNDrop }
}
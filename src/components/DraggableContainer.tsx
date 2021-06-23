import { Draggable } from "./Draggable";
import { useDraggable } from "./DraggableHook";


export const DraggableContainer = () => {
    const { onDrop, onDragLeave, dragOver, dragStart, itemList, dragNDrop } = useDraggable();
    return (

        <div className="bg-blue-300">
            <ul className="p-2">
                {itemList.map((item: any, index: number) => {
                    return (
                        <Draggable key={index}
                            className={dragNDrop && dragNDrop?.draggedTo === index ? 'bg-blue-400 text-white' : ''}
                            onDrag={event => event}//console.log("OnDrag Event => ", event)
                            index={index}
                            onDragEnd={event => event}//console.log("OnDragEnd Event => ", event)
                            onDragLeave={onDragLeave}//console.log("OnDragLeave Event => ", event)
                            onDragOver={dragOver}//console.log("OnDragOver Event => ", event) }
                            onDragStart={dragStart}//console.log("OnDragStart Event => ", event)
                            onDrop={onDrop}//console.log("OnDrop Event => ", event) }
                        >

                            {item.title}
                        </Draggable>
                    )
                })}
            </ul>
        </div>
    );
}
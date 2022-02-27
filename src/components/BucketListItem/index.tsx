import { MutableRefObject, useRef, useState } from "react";
import "./index.css";




interface BucketListItemProps {
    completed: boolean,
    name?: string | undefined,
}


function BucketListItem({ completed, name }: BucketListItemProps) {
    const [ is_completed, set_is_completed ] = useState(completed);
    const self: MutableRefObject<HTMLDivElement | null> = useRef(null);

    const remove_self = () => { self.current?.parentNode?.removeChild(self.current) }

    return (
        <div className="BucketListItem" ref={self}>
            <input type="text" placeholder="Empty" className="ItemName" />

            { is_completed === true && <button className="Utility ToggleCompleted True" onClick={() => { set_is_completed(!is_completed) }}>✖</button> }
            { is_completed === false && <button className="Utility ToggleCompleted False" onClick={() => { set_is_completed(!is_completed) }}>✔</button> }

            <button className="Utility RemoveButton" onClick={remove_self}>🗑</button>
        </div>
    );
}

export default BucketListItem;
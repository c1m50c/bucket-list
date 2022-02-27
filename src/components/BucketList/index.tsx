import { useState } from "react";
import BucketListItem from "../BucketListItem";
import "./index.css";


const add_item = (items: JSX.Element[], set_method: React.Dispatch<React.SetStateAction<JSX.Element[]>>) => {
    set_method(items.concat([<BucketListItem completed={false} />]));
}


/**
 * Used to store list elements to represent a `BucketList`.
 */
function BucketList() {
    /** Reference to the `BucketListContents` of the `BucketList`. */
    const [contents, set_contents] = useState<JSX.Element[]>([  ]);

    return (
        <li className="BucketList">
            {contents}
            <button className="AddItem" onClick={() => add_item(contents, set_contents)}>+</button>
        </li>
    );
}

export default BucketList;
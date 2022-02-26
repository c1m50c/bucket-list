import { MutableRefObject, useRef } from "react";
import BucketListItem from "../BucketListItem";
import "./index.css";


/** Reference to the `BucketListContents` of the `BucketList`. */
const contents: MutableRefObject<null | HTMLLIElement> = useRef(null);


function add_item() {
    let new_item = BucketListItem();
    // TODO: Append BucketListItem to DOM
}


/**
 * Used to store list elements to represent a `BucketList`.
 */
function BucketList() {
    return (
        <li className="BucketList" ref={contents}>
            <button className="AddItem" onClick={add_item}>+</button>
        </li>
    );
}

export default BucketList;
import "./index.css";


/**
 * Props passed to the `BucketList` class.
 * 
 * # Props
 * ```ts
 * // Children of the `BucketList`, also known as list elements.
 * children: JSX.Element | JSX.Element[] | null
 * ```
 */
interface BucketListProps {
    /**
     * Children of the `BucketList`, also known as list elements.
     */
    children: JSX.Element | JSX.Element[] | null;
}


/**
 * Used to store list elements to represent a `BucketList`.
 */
function BucketList({ children }: BucketListProps) {
    return (
        <li className="BucketList">
            {children}
        </li>
    );
}

export default BucketList;
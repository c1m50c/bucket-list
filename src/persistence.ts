/**
 * Interface representing a `ListEntry`, used in saving `List`s.
 */
export interface Entry {
    name: string,
    completed: boolean,
}


/**
 * Saves a `List` into `localStorage`.
 * 
 * # Parameters
 * ```ts
 * name: string // Name of the `List`.
 * entries: Entry[] | Array<Entry> // Array of `Entry`s to be saved as a `JSON` array.
 * ```
*/
export const save_list = (name: string, entries: Entry[] | Array<Entry>) => {
    localStorage.setItem(name, JSON.stringify(entries));
}


/**
 * Removes a `List` from `localStorage`.
 * 
 * # Parameters
 * ```ts
 * name: string // Name of the `List` to remove.
 * ```
 */
export const remove_list = (name: string) => {
    localStorage.removeItem(name);
}


/**
 * Removes all `List`s from `localStorage`.
 */
export const remove_lists = () => {
    localStorage.clear();
}
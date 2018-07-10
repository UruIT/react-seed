export const SortableContainer = component => component;
export const SortableElement = component => component;
export const SortableHandle = component => component;

export const arrayMove = (arr, oldIndex, newIndex) => {
	const array = arr.slice(0);
	array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
	return array;
};

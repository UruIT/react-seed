import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
const ListItem = SortableElement(({ children }) => (
	<div>{children}</div>
));

export default ListItem;

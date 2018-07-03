import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';

import DragHandleIcon from './DragHandleIcon'

const DragHandle = SortableHandle(() => (<DragHandleIcon/>));

export default DragHandle;

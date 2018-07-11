import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';

import styles from './drag-handle.scss';

const DragHandle = SortableHandle(() => <i className={styles.dragHandle} />);

export default DragHandle;

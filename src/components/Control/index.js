import React from 'react';
import styles from './Control.module.sass';
import cn from 'classnames';
import Icon from '../Icon';
import Actions from '../Actions';

const actions = [
  {
    title: 'Edit product',
    icon: 'edit',
    action: () => console.log('Edit product'),
  },
  {
    title: 'View comment',
    icon: 'message',
    action: () => console.log('View comment'),
  },
  {
    title: 'Edit title & description',
    icon: 'edit',
    action: () => console.log('Edit title & description'),
  },
  {
    title: 'Get shareable link',
    icon: 'link',
    action: () => console.log('Get shareable link'),
  },
  {
    title: 'Delete forever',
    icon: 'trash',
    action: () => console.log('Delete forever'),
  },
];

const Control = ({
  className,
  visibleActions,
  setVisibleActions,
  up,
  more,
  options,
}) => {
  return (
    <div className={cn(styles.control, className)}>
      {options.map((opt) => (
        <button
          key={opt.title}
          onClick={opt.action}
          title={opt.title}
          className={styles.button}
        >
          <Icon name={opt.icon} size='20' />
        </button>
      ))}

      {more && (
        <Actions
          className={styles.actions}
          classActionsHead={styles.actionsHead}
          classActionsBody={styles.actionsBody}
          classActionsOption={styles.actionsOption}
          items={actions}
          visible={visibleActions}
          setVisible={setVisibleActions}
          up={up}
        />
      )}
    </div>
  );
};

export default Control;

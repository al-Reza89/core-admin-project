import React from "react";
// import cn from 'classnames';
import styles from "./DocumentCaptureRun.module.sass";
import Card from "../../components/Card";
import Table from "./Table";
// import Dropdown from '../../components/Dropdown';
// import Icon from '../../components/Icon';

const items = [
  {
    id: 1,
    step: {
      icon: "bolt",
    },
    tab: {
      color: "#CABDFF",
      label: "Gmail",
      counter: "Gmail",
    },
    description: "Click on, Email Name",
    variable: {
      title: `"Generative AI in today's world"`,
    },
    status: {
      icon: "checkCircle",
    },
  },
  {
    id: 2,
    step: {
      icon: "key",
    },
    tab: {
      color: "#B1E5FC",
      label: "Gmail",
      counter: "Gmail",
    },
    description: "Copy content from, Email Subject",
    variable: {
      title: `Naveen - Generative AI in today's world...`,
    },
    status: {
      icon: "warning",
    },
  },
  {
    id: 3,
    step: {
      icon: "output",
    },
    tab: {
      color: "#FFD88D",
      label: "Gmail",
      counter: "Gmail",
    },
    description: "Copy content from, Email body",
    variable: {
      title: "Hellow Naveen...",
    },
    status: {
      icon: "checkCircle",
    },
  },
  {
    id: 4,
    step: {
      icon: "replay",
    },
    tab: {
      color: "#CABDFF",
      value: "Gmail",
      counter: "Gmail",
    },
    description: "Click on, Email Name",
    variable: {
      title: "Generative AI in today's world",
    },
    status: {
      icon: "checkCircle",
    },
  },
];
// const intervals = [
//   'Last 24 hours',
//   'Last 7 days',
//   'Last 14 days',
//   'Last 28 days',
//   'Last 56 days',
// ];
const DocumentCaptureRun = ({ footer }) => {
  // const [sorting, setSorting] = useState(intervals[0]);

  return (
    <Card className={styles.card} title={`Run Time`} classTitle="title-primary">
      <Table items={items} />
    </Card>
  );
};

export default DocumentCaptureRun;

/**
 * HEADER for Phase 2
<div className={styles.headerElWrapper}>
          <p>Select Debug Workflow</p>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={sorting}
            setValue={setSorting}
            options={intervals}
            small
          />
          <button className={cn('button-small', styles.runBtn)}>
            <Icon name='play' size='24' fill='#fff' />
            <span>Run</span>
          </button>
        </div>
 */

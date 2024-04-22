import React, { useEffect } from 'react';
import TextInput from '../../../components/TextInput';
import styles from './Wiyzard.module.sass';
import Item from '../Item';
import { useSetRecoilState } from 'recoil';
import { showHeaderDropdownAtom } from '../../../atoms/showHeaderDropdownAtom';
import Dropdown from '../../../components/Header/Dropdown';
import Radio from '../../../components/Radio';

const WiyzardEmail = () => {
  const setShowHeaderDropdown = useSetRecoilState(showHeaderDropdownAtom);
  useEffect(() => {
    setShowHeaderDropdown(false);
    return () => {
      setShowHeaderDropdown(true);
    };
  }, [setShowHeaderDropdown]);
  return (
    <Item title='Wiyzard Email' classTitle='title-primary'>
      <div className={styles.dropdownBox}>
        <p className={styles.dropdownLabel}>Select Wiyzard</p>
        <Dropdown />
      </div>
      <div className={styles.radios}>
        <div className={styles.radioItem}>
          <label htmlFor='radio1'>
            Use default email ids from Wiyse(wiyzard-name@wiyse.com)
          </label>
          <Radio name='default-email' id='radio1' />
        </div>
        <div className={styles.radioItem}>
          <label htmlFor='radio2'>
            Use self-generated email id's(your-nam@yourdomain.com)
          </label>
          <Radio name='default-email' id='radio2' />
        </div>
      </div>
      <div className={styles.wiyzard}>
        <TextInput
          className={styles.field}
          label='Email'
          name='display-name'
          type='text'
          tooltip='Maximum 100 characters. No HTML or emoji allowed'
          required
        />
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label='Password'
            name='display-name'
            type='text'
            tooltip='Maximum 100 characters. No HTML or emoji allowed'
            required
          />
          <TextInput
            className={styles.field}
            label='Confirm Password'
            name='display-name'
            type='text'
            tooltip='Maximum 100 characters. No HTML or emoji allowed'
            required
          />
        </div>
      </div>
    </Item>
  );
};

export default WiyzardEmail;

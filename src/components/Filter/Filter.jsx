import css from './Filter.module.css';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selector';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by Name
        <input
          className={css.inputstyle}
          type="text"
          value={value}
          onChange={e => {
            dispatch(setFilterValue(e.target.value));
          }}
          placeholder=" "
        />
      </label>
    </div>
  );
};

export default ContactFilter;

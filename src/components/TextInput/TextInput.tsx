import React, { FC } from 'react';
import Select from 'react-select';

import { COLORS } from '../../constants';
import { StyledLabel } from './TextInputStyles';

interface ITextInput {
  data: any[];
  placeholder: string;
  ariaLabelledby: string;
  handleChange: (event: any) => void;
  label: string;
}
const customStyles = {
  control: (_: any, state: any) => ({
    width: 325,
    borderBottom: state.isFocused ? `1px solid ${COLORS.primary}` : `1px solid ${COLORS.transparentGray75}`,
    display: 'flex',
    minHeight: 38,
    transition: 'all 100ms',
  }),
  indicatorsContainer: (_: any, _state: any) => ({
    display: 'none',
  }),
};

const TextInput: FC<ITextInput> = ({ data, placeholder, ariaLabelledby, handleChange, label }): JSX.Element => (
  <StyledLabel htmlFor={label}>
    {label}
    <Select
      aria-label={label}
      aria-labelledby={ariaLabelledby}
      closeMenuOnSelect
      isSearchable
      onBlur={handleChange}
      options={data}
      placeholder={placeholder}
      styles={customStyles}
      isClearable
    />
  </StyledLabel>
);

export default TextInput;

import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { UncheckedIcon } from 'components/icons';

export const Checkbox = (props: CheckboxProps) => {
    return <MuiCheckbox {...props} icon={<UncheckedIcon />} />;
};

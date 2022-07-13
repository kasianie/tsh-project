import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { SearchIcon } from 'components/icons';

export const SearchInput = (props: TextFieldProps) => {
    return (
        <TextField
            sx={{ maxWidth: '392px' }}
            fullWidth
            name="search"
            type="search"
            placeholder="Search..."
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            {...props}
        />
    );
};

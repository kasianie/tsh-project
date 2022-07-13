import { Typography } from '@mui/material';
import { TaskListPlainIcon } from 'components/icons';
import { StyledListStateInfo, StyledTitle } from './ListStateInfo.styles';
import { ListStateInfoProps } from './ListStateInfo.types';

export const ListStateInfo = ({ error = false }: ListStateInfoProps) => {
    return (
        <StyledListStateInfo>
            <TaskListPlainIcon />
            <StyledTitle variant="h5" color={error ? 'error' : 'default'}>
                {error ? 'Ooops... something went wrong' : "Ooops... It's empty here"}
            </StyledTitle>
            <Typography variant="body2" color="text.secondary">
                {error ? 'Try again later' : 'There are no products on the list'}
            </Typography>
        </StyledListStateInfo>
    );
};

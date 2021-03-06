import { Link as RouterLink } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { AppBarProps } from './AppBar.types';
import { Button, Typography } from '@mui/material';
import { LayoutWrapper } from 'components/LayoutWrapper/LayoutWrapper';
import { StyledHeader, StyledHeaderButtonWrapper, StyledHeaderContent, StyledHeaderLogo } from './AppBar.styles';

export const AppBar = ({ children }: AppBarProps) => {
    return (
        <StyledHeader>
            <LayoutWrapper>
                <StyledHeaderContent>
                    <StyledHeaderLogo>
                        <Typography variant="h1">join.tsh.io</Typography>
                    </StyledHeaderLogo>
                    <StyledHeaderButtonWrapper>
                        <Button variant="outlined" component={RouterLink} to={AppRoute.LOGIN}>
                            Log in
                        </Button>
                    </StyledHeaderButtonWrapper>
                    {children}
                </StyledHeaderContent>
            </LayoutWrapper>
        </StyledHeader>
    );
};

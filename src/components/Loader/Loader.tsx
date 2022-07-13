import { LoaderIcon } from 'components/icons';
import { StyledLoader, StyledLoaderWrapper } from './Loader.styles';

export const Loader = () => (
    <StyledLoaderWrapper>
        <StyledLoader>
            <LoaderIcon />
        </StyledLoader>
    </StyledLoaderWrapper>
);

import { ContentWrapper, MainWrapper } from './LayoutWrapper.styles';
import { LayoutWrapperProps } from './LayoutWrapper.types';

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <MainWrapper>
            <ContentWrapper>{children}</ContentWrapper>
        </MainWrapper>
    );
};

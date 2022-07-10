import { ContentWrapper, MainWrapper } from './styles';

type LayoutWrapperProps = {
    children: React.ReactNode;
};

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <MainWrapper>
            <ContentWrapper>{children}</ContentWrapper>
        </MainWrapper>
    );
};

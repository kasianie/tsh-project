import { CardMedia, Dialog, Typography } from '@mui/material';
import { CloseIcon } from 'components/icons';
import { StyledCard } from 'components/StyledCard/StyledCard';
import { StyledDetailsContent, StyledIconButton } from './DetailsDialog.styles';
import { DetailsDialogProps } from './DetailsDialog.types';

export const DetailsDialog = ({ image, name, description, onClose }: DetailsDialogProps) => {
    return (
        <Dialog fullWidth maxWidth="sm" open onClose={onClose}>
            <StyledCard>
                <StyledIconButton color="inherit" onClick={onClose}>
                    <CloseIcon />
                </StyledIconButton>
                <CardMedia component="img" height="354" image={image} alt={name} />
                <StyledDetailsContent>
                    <Typography variant="h2" marginBottom="8px">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </StyledDetailsContent>
            </StyledCard>
        </Dialog>
    );
};

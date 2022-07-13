import { Button, CardMedia, Typography } from '@mui/material';
import { StarRating } from 'components/StarRating/StarRating';
import { BottomCardSection, StyledCardContent, StyledCardLabel } from './ProductCard.styles';
import { StyledCard } from 'components/StyledCard/StyledCard';
import { ProductCardProps } from './ProductCard.types';

export const ProductCard = ({ name, description, rating, image, promo, active, onClick }: ProductCardProps) => {
    return (
        <StyledCard component="article">
            <CardMedia
                component="img"
                height="170"
                image={image}
                alt={name}
                sx={!active ? { filter: 'grayscale(100%)', opacity: 0.5 } : {}}
            />
            {promo && <StyledCardLabel>Promo</StyledCardLabel>}
            <StyledCardContent>
                <section>
                    <Typography variant="h2" marginBottom="8px">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </section>
                <BottomCardSection>
                    <StarRating value={rating} readOnly sx={{ marginBottom: '16px' }} />
                    <Button onClick={onClick} fullWidth variant="contained" color="primary" disabled={!active}>
                        {active ? 'Show details' : 'Unavailable'}
                    </Button>
                </BottomCardSection>
            </StyledCardContent>
        </StyledCard>
    );
};

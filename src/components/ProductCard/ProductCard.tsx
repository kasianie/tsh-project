import { Button, CardMedia, Typography } from '@mui/material';
import { ProductItem } from 'pages/products/Products.types';
import { StarRating } from 'components/StarRating/StarRating';
import { BottomCardSection, StyledCard, StyledCardContent, StyledCardLabel } from './ProductCard.styles';

type ProductCardProps = ProductItem & {
    onClick: (id: number) => void;
};

export const ProductCard = ({ id, name, description, rating, image, promo, active, onClick }: ProductCardProps) => {
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
                    <Typography variant="h5" marginBottom="8px">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </section>
                <BottomCardSection>
                    <StarRating value={rating} readOnly sx={{ marginBottom: '16px' }} />
                    <Button
                        onClick={() => onClick(id)}
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!active}
                    >
                        {active ? 'Show details' : 'Unavailable'}
                    </Button>
                </BottomCardSection>
            </StyledCardContent>
        </StyledCard>
    );
};

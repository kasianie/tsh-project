import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { StarRating } from 'components/StarRating/StarRating';
import { StyledCardLabel } from './styles';

type ProductCardProps = {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
};

export const ProductCard = ({ id, name, description, rating, image, promo, active }: ProductCardProps) => {
    return (
        <Card
            component="article"
            sx={{
                height: '100%',
                borderRadius: '8px',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <CardMedia
                component="img"
                height="170"
                image={image}
                alt={name}
                sx={!active ? { filter: 'grayscale(100%)', opacity: 0.5 } : {}}
            />
            {promo && <StyledCardLabel>Promo</StyledCardLabel>}
            <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <section>
                    <Typography variant="h5" marginBottom="8px">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </section>
                <footer style={{ marginTop: '32px' }}>
                    <StarRating value={rating} readOnly sx={{ marginBottom: '16px' }} />
                    <Button onClick={() => alert(id)} fullWidth variant="contained" color="primary" disabled={!active}>
                        {active ? 'Show details' : 'Unavailable'}
                    </Button>
                </footer>
            </CardContent>
        </Card>
    );
};

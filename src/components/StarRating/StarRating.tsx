import { Rating, RatingProps } from '@mui/material';
import { StarContainedIcon, StarOutlinedIcon } from 'components/icons';

export const StarRating = (props: RatingProps) => (
    <Rating {...props} icon={<StarContainedIcon />} emptyIcon={<StarOutlinedIcon />} />
);

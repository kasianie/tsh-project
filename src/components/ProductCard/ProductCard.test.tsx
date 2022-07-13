import { render } from 'tests';
import { ProductCard } from './ProductCard';

const onClick = jest.fn();

describe('ProductCard', () => {
    test('Renders active card without promo', () => {
        const props = {
            id: 1,
            name: 'Product name',
            description: 'Product description',
            rating: 4,
            image: 'image-url',
            promo: false,
            active: true,
            onClick
        };
        const { getByRole, getByText, getAllByText, queryByText } = render(<ProductCard {...props} />);

        expect(getByText(props.name)).toBeInTheDocument();
        expect(getByText(props.description)).toBeInTheDocument();
        expect(getAllByText('StarContained.svg')).toHaveLength(props.rating);
        expect(queryByText('Promo')).not.toBeInTheDocument();
        expect(getByText('Show details')).toBeInTheDocument();
        expect(getByRole('button')).toBeEnabled();
    });
    test('Renders active card with promo', () => {
        const props = {
            id: 1,
            name: 'Product name',
            description: 'Product description',
            rating: 4,
            image: 'image-url',
            promo: true,
            active: true,
            onClick
        };
        const { getByText } = render(<ProductCard {...props} />);

        expect(getByText('Promo')).toBeInTheDocument();
    });
    test('Renders not active card', () => {
        const props = {
            id: 1,
            name: 'Product name',
            description: 'Product description',
            rating: 4,
            image: 'image-url',
            promo: false,
            active: false,
            onClick
        };
        const { getByRole, getByText, queryByText } = render(<ProductCard {...props} />);

        expect(queryByText('Show details')).not.toBeInTheDocument();
        expect(getByText('Unavailable')).toBeInTheDocument();
        expect(getByRole('button')).toBeDisabled();
    });
});

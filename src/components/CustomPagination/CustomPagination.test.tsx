import { render } from 'tests';
import { CustomPagination } from './CustomPagination';

const onChangePage = jest.fn();

describe('CustomPagination', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });
    test('Displays with count <= 6', () => {
        const props = {
            count: 6,
            page: 1,
            onChangePage
        };
        const { getByText, queryByText } = render(<CustomPagination {...props} />);

        expect(getByText('First')).toBeInTheDocument();
        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('3')).toBeInTheDocument();
        expect(getByText('4')).toBeInTheDocument();
        expect(getByText('5')).toBeInTheDocument();
        expect(getByText('6')).toBeInTheDocument();
        expect(getByText('Last')).toBeInTheDocument();
        expect(queryByText('...')).not.toBeInTheDocument();
    });

    test('Displays with count > 6 and page === 1', async () => {
        const props = {
            count: 7,
            page: 1,
            onChangePage
        };
        const { getByText, queryByText } = render(<CustomPagination {...props} />);

        expect(getByText('First')).toBeInTheDocument();
        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('3')).toBeInTheDocument();
        expect(queryByText('4')).not.toBeInTheDocument();
        expect(getByText('...')).toBeInTheDocument();
        expect(getByText('5')).toBeInTheDocument();
        expect(getByText('6')).toBeInTheDocument();
        expect(getByText('7')).toBeInTheDocument();
        expect(getByText('Last')).toBeInTheDocument();
    });
    test('Displays with count > 6 and page >=2', async () => {
        const props = {
            count: 10,
            page: 3,
            onChangePage
        };
        const { getByText, queryByText } = render(<CustomPagination {...props} />);
        expect(getByText('First')).toBeInTheDocument();
        expect(queryByText('1')).not.toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('3')).toBeInTheDocument();
        expect(getByText('4')).toBeInTheDocument();
        expect(getByText('...')).toBeInTheDocument();
        expect(getByText('8')).toBeInTheDocument();
        expect(getByText('9')).toBeInTheDocument();
        expect(getByText('10')).toBeInTheDocument();
        expect(getByText('Last')).toBeInTheDocument();
    });
    test('Displays with count > 6 and page===n', async () => {
        const props = {
            count: 10,
            page: 10,
            onChangePage
        };
        const { getByText } = render(<CustomPagination {...props} />);
        expect(getByText('First')).toBeInTheDocument();
        expect(getByText('...')).toBeInTheDocument();
        expect(getByText('5')).toBeInTheDocument();
        expect(getByText('6')).toBeInTheDocument();
        expect(getByText('7')).toBeInTheDocument();
        expect(getByText('8')).toBeInTheDocument();
        expect(getByText('9')).toBeInTheDocument();
        expect(getByText('10')).toBeInTheDocument();
        expect(getByText('Last')).toBeInTheDocument();
    });
    test('Has blocked First button when page === 1', async () => {
        const props = {
            count: 10,
            page: 1,
            onChangePage
        };
        const { getByRole } = render(<CustomPagination {...props} />);
        expect(getByRole('button', { name: 'First' })).toBeDisabled();
    });
    test('Has blocked Last button when page === count', async () => {
        const props = {
            count: 10,
            page: 10,
            onChangePage
        };
        const { getByRole } = render(<CustomPagination {...props} />);
        expect(getByRole('button', { name: 'Last' })).toBeDisabled();
    });
});

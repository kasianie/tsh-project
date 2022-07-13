import React from 'react';

import { render } from 'tests';

import { Products } from './Products';

describe('Products', () => {
    test('Displays page header', async () => {
        const { getByText, getByRole, getAllByRole } = render(<Products />);
        expect(getByText('join.tsh.io')).toBeInTheDocument();
        expect(getByRole('searchbox')).toBeInTheDocument();
        expect(getAllByRole('checkbox')).toHaveLength(2);
        expect(getByRole('link', { name: 'Log in' })).toBeInTheDocument();
    });
});

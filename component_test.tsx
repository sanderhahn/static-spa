import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './component';

test('render Component', () => {
    render(<Component />);
    expect(screen.getByText('Component')).toBeInTheDocument();
});

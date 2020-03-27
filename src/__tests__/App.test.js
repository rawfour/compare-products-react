import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from '../components/App';
import { AppProvider } from '../context';

describe('Render components test', () => {
  it('render product list', () => {
    const { getByTestId } = render(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    expect(getByTestId('productsList')).toBeInTheDocument();
  });
  it('render products', () => {
    const { getAllByTestId } = render(
      <AppProvider>
        <App />
      </AppProvider>,
    );

    wait(() => expect(getAllByTestId('product')));
  });
});

describe('Handle buttons test', () => {
  it('make compare', () => {
    const { getAllByTestId, getByTestId } = render(
      <AppProvider>
        <App />
      </AppProvider>,
    );

    wait(() => {
      fireEvent.click(getAllByTestId('compare-btn')[0]);
      fireEvent.click(getAllByTestId('compare-btn')[1]);
      expect(getByTestId('compare')).toBeInTheDocument();
    });
  });
});

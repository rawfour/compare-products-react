import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';
import { AppProvider } from '../context';

describe('Render components test', () => {
  it('render product list', async () => {
    const { getByTestId } = render(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    expect(getByTestId('productsList')).toBeInTheDocument();
  });
  it('render products', async () => {
    const { getAllByTestId } = render(
      <AppProvider>
        <App />
      </AppProvider>,
    );

    expect(getAllByTestId('product'));
  });
});

describe('Handle buttons test', () => {
  // import React from 'react';
  // import { render, fireEvent, cleanup } from '@testing-library/react';
  // import Product from '../components/Product';
  // import AppContext from '../context';
  // afterEach(cleanup);
  // const initialProduct = {
  //   id: 1,
  //   name: 'Maliny',
  //   img: '/img/image01.jpg',
  //   description: 'Poprostu maliny',
  //   price: '2.49',
  //   colors: ['orange', 'black'],
  //   fresh: false,
  // };
  // const toCompare = [
  //   {
  //     id: 1,
  //     name: 'Maliny',
  //     img: '/img/image01.jpg',
  //     description: 'Poprostu maliny',
  //     price: '2.49',
  //     colors: ['orange', 'black'],
  //     fresh: false,
  //   },
  // ];
  // const nothingToCompare = [];
  // describe('Product component', () => {
  //   it('render compare button', () => {
  //     const { getByTestId } = render(
  //       <Product product={initialProduct} toCompare={nothingToCompare} />,
  //     );
  //     expect(getByTestId('compare-btn')).toBeInTheDocument();
  //   });
  it('make compare', () => {
    const { getAllByTestId, getByTestId } = render(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    // console.log(getAllByTestId('compare-btn')[0]);
    fireEvent.click(getAllByTestId('compare-btn')[0]);
    fireEvent.click(getAllByTestId('compare-btn')[1]);
    expect(getByTestId('compare')).toBeInTheDocument();
  });
  // it('remove from compare', () => {
  //   const { getAllByTestId, getByTestId } = render(
  //     <AppProvider>
  //       <App />
  //     </AppProvider>,
  //   );
  //   fireEvent.click(getAllByTestId('compare-btn')[0]);
  //   fireEvent.click(getAllByTestId('compare-btn')[1]);
  //   fireEvent.click(getAllByTestId('remove-btn')[0]);
  //   expect(getByTestId('compare')).not.toBeInTheDocument();
  // });
  // it('render remove button', () => {
  //   const { getByTestId } = render(<Product product={initialProduct} toCompare={toCompare} />);
  //   expect(getByTestId('remove-btn')).toBeInTheDocument();
  // });
  // it('handle remove button', () => {
  //   const removeFromCompare = jest.fn();
  //   const { getByTestId } = render(
  //     <Product product={initialProduct} toCompare={toCompare} remove={removeFromCompare} />,
  //   );
  //   fireEvent.click(getByTestId('remove-btn'));
  //   expect(removeFromCompare).toHaveBeenCalledTimes(1);
  // });

  // });
});

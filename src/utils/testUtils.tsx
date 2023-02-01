import {render, RenderOptions} from '@testing-library/react-native';
import {JSXElementConstructor, ReactElement} from 'react';
import {CryptoPrice} from '../contexts/CryptoPrice';

interface AllTheProvidersProps {
  children: ReactElement;
}

const AllTheProviders = ({children}: AllTheProvidersProps) => {
  return <CryptoPrice>{children}</CryptoPrice>;
};

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};

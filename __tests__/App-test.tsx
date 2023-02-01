/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '../src/utils/testUtils';

it('renders correctly', () => {
  render(<App />, {});
});

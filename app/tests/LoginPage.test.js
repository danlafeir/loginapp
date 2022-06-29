import React from 'react';

import LoginPage from '../LoginPage'

describe('LoginPage', () => {
  global.document = jsdom();
  global.window = global.document.defaultView;
  
  const LoginPageWrapper = mount(<LoginPage />);

  it('should reveal form after clicking "Login"', () => {});

  it('should add error messages after submitting an empty form', () => {});
  
  it('should render redirect on successful submission', () => {});

  it('should ')
});

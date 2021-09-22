/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './index'

describe('index', () => {
  const _App = render(<Home/>);
  const content = _App.getByTestId("content");
  describe('content', () => {
    test('Defined', () => {
      expect(content).toBeInTheDocument()
    })
  });
  
  
})

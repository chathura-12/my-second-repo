import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('shows validation errors and success', () => {
  render(<BookingForm />);
  const submit = screen.getByText(/submit/i);
  fireEvent.click(submit);

  // errors should show
  expect(screen.getByText(/Name is required|Valid email required|Date is required/i)).toBeInTheDocument();

  // fill valid data
  fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2025-10-30' }});
  fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '19:00' }});
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' }});

  fireEvent.click(submit);

  expect(screen.getByText(/Reservation successful/i)).toBeInTheDocument();
});

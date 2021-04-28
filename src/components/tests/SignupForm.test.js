// author: nora-exe

//* Tasks
/** On-boarding process for a new user:
 * Can type in text areas
 * cant submit without whole form filled
 * can submit with forms filled
*/

//TODO Backlog
/**
 * renders error message if username already taken
 * 
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignupForm from '../SignupForm';

// Test 1. Can type in text areas
test("can type in text areas", () => {
    render(<SignupForm />)
    userEvent.type(screen.getByLabelText('name'), 'name')
    expect(screen.getByLabelText('name')).toHaveValue('name')
})  

// Test 2. Can't submit without whole form filled
test("submit button is disabled if at least 1 field is empty", () => {
    render(<SignupForm />)
    expect(screen.getByRole('button')).toBeDisabled()
})

// Test 3. CAN submit if all fields are filled
test("can submit if all fields are filled", () => {
    render(<SignupForm />)
    userEvent.type(screen.getByLabelText('name'), 'name')
    userEvent.type(screen.getByLabelText('phone'), '111-111-1111')
    userEvent.type(screen.getByLabelText('username'), 'username')
    userEvent.type(screen.getByLabelText('password'), 'password')
    expect(screen.getByRole('button')).not.toBeDisabled()
})
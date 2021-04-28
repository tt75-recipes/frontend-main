// author: nora-exe

import { render } from "react-dom"

//* Tasks
/** 
 * Renders a selected recipe component
 * Can click Edit button
 * Can click delete button
 */

//TODO Backlog
/**
 * Can delete selected recipe 
 * 
 */

// Test. 1 Checks that Recipe component renders
test('Recipe renders', () => {
    render(<Recipe />)
    expect(/ingredients/i).toBeInTheDocument()
})


// Test. 2 Checks that Edit can be clicked
test('can click Edit button', () => {
    render(<Recipe />)
    expect(screen.getByRole(button, { name: 'Edit' })).not.toBeDisabled()
})


// Test. 3 Checks that Delete can be clicked
test('can click Delete button', () => {
    render(<Recipe />)
    expect(screen.getByRole(button, { name: 'Delete' })).not.toBeDisabled()
})
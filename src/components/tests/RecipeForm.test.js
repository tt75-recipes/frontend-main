// author: nora-exe

import userEvent from "@testing-library/user-event"

//* Tasks
/** Add Recipe functionality:
 * Add new recipe title, source, category, ingredients, directions
 * Can click "Add Recipe!" if all fields are full
 */

//TODO Backlog
/**
 * Can choose a category - what form will this be in? drop down? checks? linked tags? etc
 * Can edit selected recipe (can type in fields after clicking Edit button) - this depends on how Recipe component data is called
 * 
*/

// Test 1.
test("Add Recipe! is disabled if fields are empty", () => {
    render(<RecipeForm />)
    expect(screen.getByRole(button, { name: 'ADD RECIPE!' })).toBeDisabled()
})

// Test 2. 
test("can type in text areas", () => {
    render(<RecipeForm />)
    userEvent.type(screen.getByLabelText('title'), 'snickerdoodles')
    userEvent.type(screen.getByLabelText('source'), 'granny')
    userEvent.type(screen.getByLabelText('category'), 'dessert')
    userEvent.type(screen.getByLabelText('ingredients'), 'love')
    userEvent.type(screen.getByLabelText('measurements'), '1')
    userEvent.type(screen.getByLabelText('directions'), 'magic')

    expect(screen.getByLabelText('title')).toHaveValue('snickerdoodles')
    expect(screen.getByLabelText('source')).toHaveValue('granny')
    expect(screen.getByLabelText('category')).toHaveValue('dessert')
    expect(screen.getByLabelText('ingredients')).toHaveValue('love')
    expect(screen.getByLabelText('measurements')).toHaveValue('1')
    expect(screen.getByLabelText('directions')).toHaveValue('magic')
})

// Test. 3
test("Add Recipe! is enabled if all fields are full", () => {
    render(<RecipeForm />)

    userEvent.type(screen.getByLabelText('title'), 'snickerdoodles')
    userEvent.type(screen.getByLabelText('source'), 'granny')
    userEvent.type(screen.getByLabelText('category'), 'dessert')
    userEvent.type(screen.getByLabelText('directions'), 'magic')

    userEvent.type(screen.getByLabelText('ingredients'), 'love')
    userEvent.type(screen.getByLabelText('measurements'), '1')
    userEvent.click(screen.getByRole(button, { name: 'ADD' }))

    expect(/1 love/i).toBeInTheDocument()


    expect(screen.getByRole(button, { name: 'ADD RECIPE!' })).not.toBeDisabled()
})
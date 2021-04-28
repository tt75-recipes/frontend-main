// author: nora-exe

import { render } from "react-dom"

//* Tasks
/**
 * Renders empty Recipes page
 */

//TODO Backlog
/**
 * Search `recipes` by `title` or tagged `categories`
 * 
*/

// Test 1. Default Recipes page renders 
test("Recipes renders without recipes", () => {
    render(<Recipes />)
    expect(screen.getByText(/Looks like you haven't added any recipes yet/i)).toBeInTheDocument()
})

// Test 2. Test that Recipes renders Recipe components
test("Recipe components render", () => {
    render(<Recipes />)
    expect(screen.getByText(/Looks like you haven't added any recipes yet/i)).not.toBeInTheDocument()
})

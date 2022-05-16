import { render, screen } from "@testing-library/react"
import Login from "./login/Login"

test("username input should be inserted", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument()
})
test("password input should be inserted", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/password/i);
    expect(userInputEl).toBeInTheDocument()
})
test("username input should be inserted", () => {
    render(<Login />)
    const userInputEl = screen.getByRole("button");
    expect(userInputEl).toBeInTheDocument()
})


test("username should be empty", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl.value).toBe("")
})
test("password should be empty", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/password/i);
    expect(userInputEl.value).toBe("")
})
test("button should disabled", () => {
    render(<Login />)
    const userInputEl = screen.getByRole("button");
    expect(userInputEl).toBeDisabled()
})
test("error massage should not be there", () => {
    render(<Login />)
    const userInputEl = screen.getByTestId("error");
    expect(userInputEl).not.toBeVisible()
})
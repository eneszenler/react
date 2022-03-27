import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Todo from "."

describe('Todo testleri', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />)

        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    })

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i)
        expect(items.length).toEqual(2);
    })

    test('Input ve Buton dökümanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test('Inputa string girilip butona basılınca listeye eklenmeli', () => {
        // Inputu Doldur
        const name = "Yusuf"
        userEvent.type(input, name)

        // Butona Tıkla
        userEvent.click(button)

        // assertion
        expect(screen.getByText(name)).toBeInTheDocument()
    })
})
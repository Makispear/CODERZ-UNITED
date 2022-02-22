import Options from "..";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

describe("options Component", () => {
    it('renders', () => {
        render(<Options />);
    });

    it('Matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Options />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has 3 options "Design, Front-End & Back-End"', () => {
        const { getByTestId } = render(<Options />)

        expect(getByTestId('Design')).toHaveTextContent(('Design').toUpperCase())
    })
})
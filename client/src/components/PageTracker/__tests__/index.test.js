import PageTracker from "..";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

const pageNumber = "1.1.1"

describe("'PageTracker' Component", () => {
    it('renders', () => {
        render(<PageTracker props={{ page: pageNumber }} />);
    });

    it("has classNames 'text-tertiary p-style'", () => {
        const { getByTestId } = render(<PageTracker props={{ page: pageNumber }} />)
        const testId = getByTestId('pageTracker')

        expect(testId).toHaveClass('text-tertiary p-style')
    })

    it('Matches snapshot DOM node structure', () => {
        const { asFragment } = render(<PageTracker props={{ page: pageNumber }} />);
        expect(asFragment()).toMatchSnapshot();
    });

    // it('has 3 options "Design, Front-End & Back-End"', () => {
    //     const { getByTestId } = render(<Options />)

    //     expect(getByTestId('design')).toHaveTextContent(('design').toUpperCase())
    //     expect(getByTestId('frontEnd')).toHaveTextContent(('< frontEnd >'))
    //     expect(getByTestId('backEnd')).toHaveTextContent(('back_end'))
    // })
})
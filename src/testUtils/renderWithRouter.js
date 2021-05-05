import { BrowserRouter } from 'react-router-dom'

export const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return render(ui, { wrapper: BrowserRouter })
}

export default renderWithRouter;

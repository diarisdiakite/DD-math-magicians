import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Cliking on a links should open the page it links to', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const homeNavLink = screen.getByRole('link', { name: 'Home' });
    describe('Should led the user to the Home page when he clicks Home navelink', () => {
      expect(homeNavLink).toBeDefined();

      const expectedPath = '/';
      userEvent.click(homeNavLink);
      expect(window.location.pathname).toEqual(expectedPath);
    });
  });
});

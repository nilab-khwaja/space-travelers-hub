import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureMockStore([]);

test('renders missions component correctly', async () => {
  const store = mockStore({
    missions: {
      missions: [
        {
          mission_id: '1',
          mission_name: 'Mission1',
          description: 'Description1',
          mission_join: true,
        },
        {
          mission_id: '2',
          mission_name: 'Mission2',
          description: 'Description2',
          mission_join: true,
        },

      ],
      isLoading: true,
    },
  });
  const Misions = () => (
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  const { getText } = render(<Misions />);
  expect(getText).toMatchSnapshot();
  expect(screen.getByText('Mission1')).toBeInTheDocument();
  expect(screen.getByText('Mission2')).toBeInTheDocument();
  expect(screen.getByText('Description1')).toBeInTheDocument();
});

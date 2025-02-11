import { addons, types } from '@storybook/core/manager-api';

import { Text, View } from 'react-native';

export const ADDON_ID = 'RNToolbar' as const;
export const PARAM_KEY = 'toolbar' as const;

export function register() {
  addons.register(ADDON_ID, (api) => {
    addons.add(ADDON_ID, {
      type: types.TOOL,
      title: 'Toolbar',
      render: ({ active }) => (
        <View style={{
            backgroundColor: 'red',
            width: '100%',
            height: 50
        }}>
            <Text>Loading....</Text>
        </View>
      ),
      paramKey: PARAM_KEY,
    });
  });
}
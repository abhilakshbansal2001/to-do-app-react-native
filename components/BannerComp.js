import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const BannerComp = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Okay !',
          onPress: () => setVisible(false),
        },
        
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      This app has been made by Abhilaksh Bansal , so that you can remind yourself of your duties.
    </Banner>
  );
};

export default BannerComp;
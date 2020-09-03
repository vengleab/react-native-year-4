import React from 'react';
import {View, Text} from 'react-native';
import {
  ActivityIndicator,
  Colors,
  Divider,
  Menu,
  Avatar,
  Badge,
  Button,
  Card,
  Provider,
  Title,
  Paragraph,
} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View>
        <Badge>3</Badge>
        <Avatar.Icon size={100} icon="folder" />
        <Button icon="camera">Press me</Button>
        <ActivityIndicator animating={true} color={Colors.red800} />
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

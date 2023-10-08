import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';

import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme, View, Image,Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

function App () {
  const components = {
    Header () {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Amplify logo"
            src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
        </View>
      );
    },
    Footer () {
      const { tokens } = useTheme();
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  }

  return (
    <Authenticator loginMechanisms={['email']} components={components}>
      {({ signOut, user }) => (
        <div>
          <SiteNav logout={ signOut} />
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/' exact={true} element={<HomePage />} />
            <Route path='/contacts' exact={true} element={<Contacts />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}

export default App;

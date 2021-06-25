import * as React from 'react'
import Layout from '../components/layout'
import LogRocket from 'logrocket';

const IndexPage = () => {
  LogRocket.init('j5gxht/radbruk');
  LogRocket.identify('jaczaw', {
    name: 'Jacek Zawiślak',
    email: 'jaczaw5@gmail.com',
  
    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
  });
  return (
    <Layout pageTitle="Strona główna">
      <p>Witaj na pierwszej stronie wytworzonej przy pomocy Gatsby !!!!.</p>
    </Layout>
  )
}
export default IndexPage
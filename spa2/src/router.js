import Vue from 'vue'
import Router from 'vue-router'
import LoggedIn from '@/components/LoggedIn'
import LoggedOut from '@/components/LoggedOut'
import Auth from '@okta/okta-vue'



Vue.use(Auth, {
  issuer: 'https://dev-2069012.okta.com/oauth2/default',
  clientId: '0oa28mwpg1IwAdtT25d6',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)
const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/loggedout',
      name: 'LoggedOut',
      component: LoggedOut
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/',
      name: 'LoggedIn,',
      component: LoggedIn,
      meta: {
        requriesAuth: true
      }
    }
  ]
  
}
)

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
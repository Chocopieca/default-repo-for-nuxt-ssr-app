export default function ({ redirect, store }) {
  store.dispatch('service/setTokenFromLocalStore');
  const token = store.getters["service/getUserToken"];
  if (!token) {
    redirect('/login')
  }
}

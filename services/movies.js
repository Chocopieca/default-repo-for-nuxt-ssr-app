import ApiService from './api'

export default class MoviesService extends ApiService {
  list() {
    return this.axios.$get('/movies');
  }
}

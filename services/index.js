import MoviesService from './movies'

export default (context) => {
  return {
    movies: new MoviesService(context),
  }
}

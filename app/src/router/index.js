import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import ImagesList from '@/components/images/ImagesList'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicDetail from '@/components/music/MusicDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie/MovieList',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/',
      redirect: '/movie/MovieList'
    },
    {
      path: '/music/MusicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/book/BookList',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/images/ImagesList',
      name: 'ImagesList',
      component: ImagesList
    },
    {
      path: '/movie/MovieDetail/:movieId',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/music/MusicDetail/:musicId',
      name: 'MusicDetail',
      component: MusicDetail
    },
  ]
})

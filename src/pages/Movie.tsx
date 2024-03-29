import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import { myLangAtom } from '../atom';
import { IContent } from '../interface';
import { getMovieList } from '../utils/api';
import Loader from '../components/Loader';
import Banner from '../components/Banner';
import Slider from '../components/Slider';

function Movie() {
  // language translation
  const { t } = useTranslation();
  const lang = useRecoilValue(myLangAtom);

  const { data: topRatedMovieList, isLoading: loadingTopRated } = useQuery<
    IContent[]
  >({
    queryKey: ['topRatedMovieList', lang],
    queryFn: () => getMovieList('top_rated', lang),
  });

  const { data: upcomingMovieList, isLoading: loadingUpcoming } = useQuery<
    IContent[]
  >({
    queryKey: ['upcomingMovieList', lang],
    queryFn: () => getMovieList('upcoming', lang),
  });

  const { data: nowPlayingMovieList, isLoading: loadingNowPlaying } = useQuery<
    IContent[]
  >({
    queryKey: ['nowPlayingMovieList', lang],
    queryFn: () => getMovieList('now_playing', lang),
  });

  const isLoading = loadingNowPlaying || loadingTopRated || loadingUpcoming;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Banner section='movie' content={nowPlayingMovieList?.[0]} />
      <div>
        <Slider
          section='movie'
          title={t('category.movie.topRated')}
          list={topRatedMovieList}
          zindex={3}
        />
        <Slider
          section='movie'
          title={t('category.movie.upcoming')}
          list={upcomingMovieList}
          zindex={2}
        />
        <Slider
          section='movie'
          title={t('category.movie.nowPlaying')}
          list={nowPlayingMovieList}
          zindex={1}
        />
      </div>
    </>
  );
}

export default Movie;

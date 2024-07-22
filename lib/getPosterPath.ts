export function getPosterPath(posterPath?: string, fullSize?: boolean) {
    return posterPath
      ? `https://image.tmdb.org/t/p/${fullSize ? 'original' : 'w300'}/${posterPath}`
      : 'https://links.papareact.com/o8z';
  }
  
  export default getPosterPath;
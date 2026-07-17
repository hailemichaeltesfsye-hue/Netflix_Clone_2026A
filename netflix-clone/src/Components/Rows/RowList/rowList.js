import React from 'react';
import Row from '../Row/row';
import requests from '../../../utils/request';

const rows = [
  { title: 'Trending Now', fetchUrl: requests.fetchTrending },
  { title: 'Netflix Originals', fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
  { title: 'Top Rated', fetchUrl: requests.fetchTopRatedMovies },
  { title: 'Action Movies', fetchUrl: requests.fetchActionMovies },
  { title: 'Comedy Movies', fetchUrl: requests.fetchComedyMovies },
  { title: 'Horror Movies', fetchUrl: requests.fetchHorrorMovies },
  { title: 'Romance Movies', fetchUrl: requests.fetchRomanceMovies },
  { title: 'Documentaries', fetchUrl: requests.fetchDocumentaries },
];

const RowList = () => {
  return (
    <div>
      {rows.map((row) => (
        <Row key={row.title} title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
      ))}
    </div>
  );
};

export default RowList;